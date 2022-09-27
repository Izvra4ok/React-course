import {authProfileUserAPI, securityAPI} from "../DAL/api";

const SET_USER_DATA = "social-network/auth/SET_USER_DATA";
const GET_CAPTCHA_SUCCESS = "social-network/auth/GET_CAPTCHA_SUCCESS";

let initialState = {
    email: null,
    login: null,
    isAuth: false,
    id: null,
    captchaUrl: null,
};


let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}


export const setAuthProfileUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_SUCCESS,
    payload: {captchaUrl}
});


export const getAuthProfileUser = () => {
    return async (dispatch) => {
        try {
            let data = await authProfileUserAPI.me();
            if (data.resultCode === 0) {
                // let {id, email, login} = data.data;
                await dispatch(setAuthProfileUserData(data.data.id, data.data.email, data.data.login, true));
            }
        } catch (error) {
            console.error(error)
        }
    }
};

export const getLoginUser = (email, password, rememberMe, captcha, setStatus) => {
    return async (dispatch) => {
        try {
            let data = await authProfileUserAPI.login(email, password, rememberMe, captcha);
            if (data.resultCode === 0) {
                dispatch(getAuthProfileUser())
            } else {
                setStatus(data.messages)
                if (data.resultCode === 10) {
                    dispatch(getCaptchaUrl());
                }
            }
        } catch (error) {
            console.error(error)
        }
    }
};


export const getCaptchaUrl = () => {
    return async (dispatch) => {
        try {
            const data = await securityAPI.getCaptchaServer();
            const captchaUrl = data.url
            dispatch(getCaptchaUrlSuccess(captchaUrl))
        } catch (error) {
            console.error(error)
        }
    }
};


export const getLogoutUser = (captchaUrl) => {
    return async (dispatch) => {
        try {
        let data = await authProfileUserAPI.logout();
        if (data.resultCode === 0) {
            dispatch(setAuthProfileUserData(null, null, null, null))
            dispatch(getCaptchaUrlSuccess(captchaUrl = null))
        }
    } catch (error) {
        console.error(error)
        }
    }
};


export default authReducer;