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
import {AppStateType} from "../../Redux/reduxStore";


type MapStateToPropsType = {
    isAuth: boolean,
    captchaUrl: string | null,
    email: string | null,
    id: number | null,
    login: string | null,
};

type MapDispatchToPropsType = {
    getLoginUser: (email: string, password: string, rememberMe: boolean, captcha: string, setStatus: string) => void
};


const LoginContainer: React.FC<MapDispatchToPropsType & MapStateToPropsType> = (props) => {

    if (props.isAuth) {
        return <Navigate to={"/profile/"}/>
    }

    const login = (email: string, password: string, rememberMe: boolean, captcha: string, setStatus: string) => {
        props.getLoginUser(email, password, rememberMe, captcha, setStatus)
    };

    return <LoginForm {...props} loginUser={login}/>

};


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        login: getLoginSelector(state),
        id: getIdSelector(state),
        isAuth: getIsAuthSelector(state),
        email: getEmailSelector(state),
        captchaUrl: getCaptchaUrlSelector(state),
    }
};

export default compose<React.ComponentType>(connect(mapStateToProps,
    {getLoginUser, getCaptchaUrl}),)(LoginContainer)