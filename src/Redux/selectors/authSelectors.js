import {createSelector} from "reselect";


const getEmailBasicSelector = (state) => {
    return state.auth.email;
};

export const getEmailSelector = createSelector(getEmailBasicSelector,
    (email) => {
        return email;
    });

const getLoginBasicSelector = (state) => {
    return state.auth.login;
};

export const getLoginSelector = createSelector(getLoginBasicSelector,
    (login) => {
        return login;
    });


const getIdBasicSelector = (state) => {
    return state.auth.id;
};

export const getIdSelector = createSelector(getIdBasicSelector,
    (id) => {
        return id;
    });


const getIsAuthBasicSelector = (state) => {
    return state.auth.isAuth;
};

export const getIsAuthSelector = createSelector(getIsAuthBasicSelector,
    (isAuth) => {
        return isAuth;
    });


const getCaptchaUrlBasicSelector = (state) => {
    return state.auth.captchaUrl;
};

export const getCaptchaUrlSelector = createSelector(getCaptchaUrlBasicSelector,
    (captchaUrl) => {
        return captchaUrl;
    })