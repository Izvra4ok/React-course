import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileUser} from "../../../Redux/profilePageReducer";
import {withRouter} from "../../../HOC/WithRouter";
import {AuthRedirectComponent} from "../../../HOC/Redirect";


const ProfileContainer = (props) => {

    let userId = props.router.params.userId;
    if (!userId) {userId = props.id;}

    useEffect(() => {
        props.getProfileUser(userId);
    }, [props, userId])

    return <Profile {...props}/>

}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        id: state.auth.id,
    }
}


export default connect(mapStateToProps, {getProfileUser})(withRouter(AuthRedirectComponent(ProfileContainer)));