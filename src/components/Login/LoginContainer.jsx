import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Login from "./Login";
import {getLoginUser} from "../../Redux/authReducer";

const LoginContainer = (props) => {

    const login = (email,password, rememberMe, captcha) => {
        props.getLoginUser(email,password, rememberMe, captcha)
    }
    return <Login {...props} loginUser={login}/>

};

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        id: state.auth.id,
        isAuth: state.auth.isAuth,
        email: state.auth.email,
        password: state.auth.password,
        captchaURL: state.auth.captchaURL,
    }
}

export default compose(connect(mapStateToProps, {getLoginUser}),)(LoginContainer)