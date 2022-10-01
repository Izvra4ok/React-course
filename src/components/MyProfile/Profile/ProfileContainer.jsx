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


const ProfileContainer = (props) => {

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

    const onAddPostClick = (textarea) => {
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


let mapStateToProps = (state) => {
    return {
        profile: getProfileSelector(state),
        id: getIdSelector(state),
        status: getProfileStatusSelector(state),
        isAuth: getIsAuthSelector(state),
        posts: getProfilePostsSelector(state)
    }
}


export default compose(connect(mapStateToProps, {
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

const ErrorMsg = (error) => {
    return (
        <div>
            <Preloader/>
            <div> Something went wrong!</div>
            <div> {error.error.message}</div>
        </div>
    );
};