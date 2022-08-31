import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Login from "./Login";
import {getLoginUser} from "../../Redux/authReducer";
import {Navigate} from "react-router-dom";

const LoginContainer = (props) => {
    if (props.isAuth) {return <Navigate to={"/profile/"}/>}

    const login = (email,password, rememberMe) => {
        props.getLoginUser(email,password, rememberMe)
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
    }
}

export default compose(connect(mapStateToProps, {getLoginUser}),)(LoginContainer)