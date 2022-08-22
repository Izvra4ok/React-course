import React from 'react';
import {connect} from "react-redux";
import {getProfileStatus, getProfileUser, updateProfileStatus} from "../../../Redux/profilePageReducer";
import Profile from "./Profile";
import {withRouter} from "../../../HOC/WithRouter";
import {compose} from "redux";



class ProfileContainer extends React.Component {
 I
    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {userId = 25505}

        this.props.getProfileUser(userId);
        this.props.getProfileStatus(userId);
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
     // console.log(prevProps.router.params.userId)
    // }

    render() {

        return <Profile {...this.props}
                        updateStatus={this.props.updateProfileStatus}
                        status={this.props.status}
        />

    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        id: state.auth.id,
        status: state.profilePage.status,
    }
}


export default compose(connect(mapStateToProps, {getProfileUser,getProfileStatus,updateProfileStatus}),withRouter)(ProfileContainer);




// import React, {useEffect} from 'react';
// import Profile from "./Profile";
// import {connect} from "react-redux";
// import {getProfileUser} from "../../../Redux/profilePageReducer";
// import {withRouter} from "../../../HOC/WithRouter";
// // import {WithAuthRedirectComponent} from "../../../HOC/Redirect";
// import {compose} from "redux";
//
//
// const ProfileContainer = (props) => {
//
//     let userId = props.match.params.userId;
//     if (!userId) {
//         userId = 25505
//     }
//
//     useEffect(() => {
//         props.getProfileUser(userId);
//     }, [props, userId])
//
//     return <Profile {...props}
//                     profile={props.profile}/>
//
// }
//
//
// let mapStateToProps = (state) => {
//     return {
//         profile: state.profilePage.profile,
//         idd: state.auth.id,
//     }
// }
//
//
// export default compose(connect(mapStateToProps, {getProfileUser}),
//     withRouter
// // WithAuthRedirectComponent
// )(ProfileContainer);