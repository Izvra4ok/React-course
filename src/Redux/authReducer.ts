import {authProfileUserAPI, securityAPI} from "../DAL/api";
import {AnyAction} from "redux";

const SET_USER_DATA = "social-network/auth/SET_USER_DATA";
const GET_CAPTCHA_SUCCESS = "social-network/auth/GET_CAPTCHA_SUCCESS";


export type InitialStateType = typeof initialState;

let initialState = {
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    id: null,
    captchaUrl: null as string | null,
};

let authReducer = (state: InitialStateType = initialState, action: AnyAction): InitialStateType => {
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

type setAuthProfileUserDataActionPayloadType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean | null
};

type setAuthProfileUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: setAuthProfileUserDataActionPayloadType
};

export const setAuthProfileUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthProfileUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});

type getCaptchaUrlSuccessActionPayloadType = {
    captchaUrl: string | null,
}

// type getCaptchaUrlSuccessActionType = {
//     type: typeof GET_CAPTCHA_SUCCESS,
//     payload: { captchaUrl: string }
// }

type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_SUCCESS,
    payload: getCaptchaUrlSuccessActionPayloadType
}

export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_SUCCESS,
    payload: {captchaUrl}
});


export const getAuthProfileUser = () => {
    return async (dispatch: any) => {
        try {
            let data = await authProfileUserAPI.me();
            if (data.resultCode === 0) {
                await dispatch(setAuthProfileUserData(data.data.id, data.data.email, data.data.login, true));
            }
        } catch (error) {
            console.error(error)
        }
    }
};

export const getLoginUser = (email: string | null, password: string | null, rememberMe: boolean, captcha: string | null, setStatus: any) => {
    return async (dispatch: any) => {
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
    return async (dispatch: any) => {
        try {
            const data = await securityAPI.getCaptchaServer();
            const captchaUrl = data.url
            dispatch(getCaptchaUrlSuccess(captchaUrl))
        } catch (error) {
            console.error(error)
        }
    }
};


export const getLogoutUser = (captchaUrl: string) => {
    return async (dispatch: any) => {
        try {
            let data = await authProfileUserAPI.logout();
            if (data.resultCode === 0) {
                dispatch(setAuthProfileUserData(null, null, null, false))
                dispatch(getCaptchaUrlSuccess(captchaUrl))
            }
        } catch (error) {
            console.error(error)
        }
    }
};


export default authReducer;