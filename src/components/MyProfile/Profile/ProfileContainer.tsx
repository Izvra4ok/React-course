import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    addPost,
    getProfileStatusThunkCreator,
    getProfileUserThunkCreator,
    saveAvatarProfileThunkCreator,
    updateProfileInfoThunkCreator,
    updateProfileStatusThunkCreator
} from "../../../Redux/profilePageReducer";
import {withRouter} from "../../../HOC/WithRouter";
// import {WithAuthRedirectComponent} from "../../../HOC/Redirect";
import {compose} from "redux";
import {Navigate} from "react-router-dom";
import {getIdSelector, getIsAuthSelector} from "../../../Redux/selectors/authSelectors";
import {
    getProfilePostsSelector,
    getProfileSelector,
    getProfileStatusSelector
} from "../../../Redux/selectors/profilePageSelectors";
import Preloader from "../../common/Preloader";
import ErrorBoundary from "../../common/ErrorBoundary";
import {ErrorMsgType, PostsType, ProfileType} from "../../../types/types";
import {AppStateType} from "../../../Redux/reduxStore";


type PropsType = {
    id: number,
    isAuth: boolean,
    profile: ProfileType,
    status: string,
    posts: Array<PostsType>,

    getProfileUserThunkCreator: (id: number) => void,
    getProfileStatusThunkCreator: (id: number) => void,

    updateProfileInfoThunkCreator: () => void,
    updateProfileStatusThunkCreator: (status: string) => string,
    saveAvatarProfileThunkCreator: (photoFile: File) => void,
    addPost: (textarea: string) => void,
    router: any,

};

const ProfileContainer: React.FC<PropsType> = (props) => {

    const userIdFromPath = props.router.params.userId;
    const authorisedUserId = props.id;
    const getProfileUserThunkCreator = props.getProfileUserThunkCreator;
    const getProfileStatusThunkCreator = props.getProfileStatusThunkCreator;

    useEffect(() => {
        if (userIdFromPath) {
            getProfileUserThunkCreator(userIdFromPath);
            getProfileStatusThunkCreator(userIdFromPath);
        } else if (authorisedUserId) {
            getProfileUserThunkCreator(authorisedUserId);
            getProfileStatusThunkCreator(authorisedUserId);
        }
    }, [getProfileStatusThunkCreator, getProfileUserThunkCreator, authorisedUserId, userIdFromPath]);

    const onAddPostClick = (textarea: string) => {
        props.addPost(textarea);
    };

    if (!props.isAuth && !userIdFromPath) {
        return <Navigate to={"/login"}/>
    }

    return (
        <ErrorBoundary ErrorComponent={ErrorMsg}>
            <Profile {...props}
                     profile={props.profile}
                     id={props.id}
                     updateStatus={props.updateProfileStatusThunkCreator}
                     status={props.status}
                     savePhoto={props.saveAvatarProfileThunkCreator}
                     updateProfile={props.updateProfileInfoThunkCreator}
                     onAddPostClick={onAddPostClick}
                     posts={props.posts}/>
        </ErrorBoundary>
    )
}


let mapStateToProps = (state: AppStateType) => {
    return {
        profile: getProfileSelector(state),
        id: getIdSelector(state),
        status: getProfileStatusSelector(state),
        isAuth: getIsAuthSelector(state),
        posts: getProfilePostsSelector(state)
    }
};


export default compose<React.ComponentType>(connect(mapStateToProps, {
        getProfileUserThunkCreator,
        getProfileStatusThunkCreator,
        updateProfileStatusThunkCreator,
        saveAvatarProfileThunkCreator,
        updateProfileInfoThunkCreator,
        addPost
    }),
    withRouter
// WithAuthRedirectComponent
)(ProfileContainer);


const ErrorMsg = (error: ErrorMsgType) => {
    return (
        <div>
            <Preloader/>
            <div> Something went wrong!</div>
            <div> {error.error.message}</div>
        </div>
    );
};