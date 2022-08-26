import {authProfileUserAPI} from "../DAL/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    email: null,
    login: null,
    isAuth: false,
    id: null,
    captchaURL: null,
};


let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
                // login: action.data.login,
                // id: action.data.id,
                // email: action.data.email,
                // isAuth: true,
            };
        default:
            return state;
    }
}


export const setAuthProfileUserData = (id, email, login,) => ({
    type: SET_USER_DATA,
    data: id, email, login});


export const getAuthProfileUser = () => {

    return (dispatch) => {
        authProfileUserAPI.getAuthProfileUserServer()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthProfileUserData({id, email, login}));
                }
            })
    }
};

export const getLoginUser = (email,password,rememberMe,captcha) => {
    return (dispatch) => {
        authProfileUserAPI.getLoginUserServer(email,password,rememberMe,captcha)
            .then(data => {
                if (data.resultCode === 0) {
                    let {email,password,rememberMe,captcha} = data.data
                    dispatch(setAuthProfileUserData({email,password,rememberMe,captcha}))
                }
            })
    }
};

export const getLogoutUser = () => {
    return (dispatch) => {
        authProfileUserAPI.getLogoutUserServer()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthProfileUserData(null,null,null))
                }
            })
    }
}

export default authReducer;