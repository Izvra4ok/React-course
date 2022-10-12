import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    actions,
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
    updateProfileInfoThunkCreator: () => Promise<any>,
    updateProfileStatusThunkCreator: (status: string) => string,
    saveAvatarProfileThunkCreator: (photoFile: File) => void,
    addPost: (textarea: string) => void,
    params: { userId:number },
};


const ProfileContainer: React.FC<PropsType> = (props) => {

    const {id,getProfileUserThunkCreator,getProfileStatusThunkCreator} = props;
    const userIdFromPath = props.params.userId;

    useEffect(() => {
        if (userIdFromPath) {
            getProfileUserThunkCreator(userIdFromPath);
            getProfileStatusThunkCreator(userIdFromPath);
        } else if (id) {
            getProfileUserThunkCreator(id);
            getProfileStatusThunkCreator(id);
        }
    }, [getProfileStatusThunkCreator, getProfileUserThunkCreator, id, userIdFromPath]);

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


export default compose<React.ComponentType>(connect(mapStateToProps, {addPost: actions.addPost,
        getProfileUserThunkCreator,
        getProfileStatusThunkCreator,
        updateProfileStatusThunkCreator,
        saveAvatarProfileThunkCreator,
        updateProfileInfoThunkCreator,
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