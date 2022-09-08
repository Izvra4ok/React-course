import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import LoginForm from "./LoginForm";
import {getLoginUser} from "../../Redux/authReducer";
import {Navigate} from "react-router-dom";
import {
    getEmailSelector,
    getIdSelector,
    getIsAuthSelector,
    getLoginSelector
} from "../../Redux/selectors/authSelectors";


const LoginContainer = (props) => {
    if (props.isAuth) {return <Navigate to={"/profile/"}/>}

    const login = (email,password, rememberMe,setStatus) => {
        props.getLoginUser(email,password, rememberMe,setStatus)
    }
    return <LoginForm {...props} loginUser={login}/>

};

let mapStateToProps = (state) => {
    return {
        login: getLoginSelector(state),
        id: getIdSelector(state),
        isAuth: getIsAuthSelector(state),
        email: getEmailSelector(state),
    }
}

export default compose(connect(mapStateToProps, {getLoginUser}),)(LoginContainer)