import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import LoginForm from "./LoginForm";
import {getCaptchaUrl, getLoginUser} from "../../Redux/authReducer";
import {Navigate} from "react-router-dom";
import {
    getCaptchaUrlSelector,
    getEmailSelector,
    getIdSelector,
    getIsAuthSelector,
    getLoginSelector
} from "../../Redux/selectors/authSelectors";


const LoginContainer = (props) => {

    if (props.isAuth) {
        return <Navigate to={"/profile/"}/>
    }

    const login = (email, password, rememberMe, captcha, setStatus) => {
        props.getLoginUser(email, password, rememberMe, captcha, setStatus)
    };

    return <LoginForm {...props} loginUser={login} сaptchaUrl={props.captchaUrl}/>

};

let mapStateToProps = (state) => {
    return {
        login: getLoginSelector(state),
        id: getIdSelector(state),
        isAuth: getIsAuthSelector(state),
        email: getEmailSelector(state),
        captchaUrl: getCaptchaUrlSelector(state),
    }
}

export default compose(connect(mapStateToProps, {getLoginUser, getCaptchaUrl}),)(LoginContainer)