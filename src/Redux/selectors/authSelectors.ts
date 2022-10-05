import {createSelector} from "reselect";
import {AppStateType} from "../reduxStore";


const getEmailBasicSelector = (state: AppStateType) => {
    return state.auth.email;
};

export const getEmailSelector = createSelector(getEmailBasicSelector,
    (email) => {
        return email;
    });

const getLoginBasicSelector = (state: AppStateType) => {
    return state.auth.login;
};

export const getLoginSelector = createSelector(getLoginBasicSelector,
    (login) => {
        return login;
    });


const getIdBasicSelector = (state: AppStateType) => {
    return state.auth.id;
};

export const getIdSelector = createSelector(getIdBasicSelector,
    (id) => {
        return id;
    });


const getIsAuthBasicSelector = (state: AppStateType) => {
    return state.auth.isAuth;
};

export const getIsAuthSelector = createSelector(getIsAuthBasicSelector,
    (isAuth) => {
        return isAuth;
    });


const getCaptchaUrlBasicSelector = (state: AppStateType) => {
    return state.auth.captchaUrl;
};

export const getCaptchaUrlSelector = createSelector(getCaptchaUrlBasicSelector,
    (captchaUrl) => {
        return captchaUrl;
    })