import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileUser} from "../../../Redux/profilePageReducer";
import {withRouter} from "../../../HOC/WithRouter";
// import {WithAuthRedirectComponent} from "../../../HOC/Redirect";
import {compose} from "redux";


const ProfileContainer = (props) => {

    let userId = props.router.params.userId;
    if (!userId) {
        userId = props.idd
    }

    useEffect(() => {
        props.getProfileUser(userId);
    }, [props, userId])

    return <Profile {...props}
                    profile={props.profile}/>

}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        idd: state.auth.id,
    }
}


export default compose(connect(mapStateToProps, {getProfileUser}),
    withRouter
// WithAuthRedirectComponent
)(ProfileContainer);