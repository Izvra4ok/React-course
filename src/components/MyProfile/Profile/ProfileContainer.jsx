import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileUser} from "../../../Redux/profilePageReducer";
import {withRouter} from "../../../hoc/WithRouter";
import {useNavigate} from "react-router-dom";


const ProfileContainer = (props) => {

    let navigate = useNavigate();
    useEffect(()=>{
        if (!props.isAuth) {
            return navigate("/login")
        }
    },[props.isAuth])

    let userId = props.router.params.userId;
    if (!userId) {
        userId = props.id;
    }

    useEffect(() => {
        props.getProfileUser(userId);
    }, [userId])

        return <Profile {...props}/>

}

// class ProfileContainer extends React.Component {
//
//     componentDidMount() {
//         debugger
//         let userId = this.props.router.params.userId || 2
//         this.props.getProfileUser(userId)
//     }
//     componentWillUnmount() {
//         this.props.setUserProfile(null)
//     }
//
//     render() {
//         return <Profile {...this.props} />
//
//     }
// }


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        id: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}


export default connect(mapStateToProps, {getProfileUser})(withRouter(ProfileContainer));