import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import Header from "./Header";
import {setAuthUserData} from "../../Redux/authReducer";
// import {setUserProfile} from "../../Redux/profilePageReducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData({id, email, login});
                }
            })
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`)
        //     .then(response => {
        //         debugger
        //         this.props.setUserProfile(response.data)
        //     })
    }

    render() {
        return <Header {...this.props}/>
    }
}


let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        // profile: state.profilePage.profile,
    }
}


export default connect(mapStateToProps, {
    // setUserProfile,
    setAuthUserData})(HeaderContainer)
