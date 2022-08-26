// import React from 'react';
// import {connect} from "react-redux";
// import {getProfileStatus, getProfileUser, updateProfileStatus} from "../../../Redux/profilePageReducer";
// import Profile from "./Profile";
// import {withRouter} from "../../../HOC/WithRouter";
// import {compose} from "redux";
//
//
//
// class ProfileContainer extends React.Component {
//  I
//     componentDidMount() {
//         let userId = this.props.router.params.userId
//         if (!userId) {userId = 25505}
//
//         this.props.getProfileUser(userId);
//         this.props.getProfileStatus(userId);
//     }
//
//     // componentDidUpdate(prevProps, prevState, snapshot) {
//     //  debugger
//     //  if (this.props.id !== prevProps.id) {
//     //      this.props.getProfileUser(this.props.id)
//     //  }
//     // }
//
//
//     render() {
//
//         return <Profile {...this.props}
//                         updateStatus={this.props.updateProfileStatus}
//                         status={this.props.status}
//         />
//
//     }
// }
//
//
// let mapStateToProps = (state) => {
//     return {
//         profile: state.profilePage.profile,
//         id: state.auth.id,
//         status: state.profilePage.status,
//     }
// }
//
//
// export default compose(connect(mapStateToProps, {getProfileUser,getProfileStatus,updateProfileStatus}),withRouter)(ProfileContainer);


import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileStatus, getProfileUser, updateProfileStatus} from "../../../Redux/profilePageReducer";
import {withRouter} from "../../../HOC/WithRouter";
// import {WithAuthRedirectComponent} from "../../../HOC/Redirect";
import {compose} from "redux";


const ProfileContainer = (props) => {



    let userId = props.router.params.userId;
    if (!userId) {
        userId = 25505 //props.id
    }

    useEffect(() => {
        props.getProfileUser(userId);
    }, [userId])

    return <Profile {...props}
                    updateStatus={props.updateProfileStatus}
                    status={props.status}/>
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        id: state.auth.id,
        status: state.profilePage.status,
    }
}


export default compose(connect(mapStateToProps, {getProfileUser, getProfileStatus, updateProfileStatus}),
    withRouter
// WithAuthRedirectComponent
)(ProfileContainer);