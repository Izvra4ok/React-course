import {authProfileUserAPI, securityAPI} from "../DAL/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";
import {ResultCodeEnum} from "../types/apiType";
import {ResultCodeEnumCaptcha} from "../types/apiType";

const SET_USER_DATA = "social-network/auth/SET_USER_DATA";
const GET_CAPTCHA_SUCCESS = "social-network/auth/GET_CAPTCHA_SUCCESS";


type InitialStateType = typeof initialState;

type ActionsType = setAuthProfileUserDataActionType | getCaptchaUrlSuccessActionType;

type ThunkType = ThunkAction<Promise<void>, any, AppStateType, ActionsType>;

let initialState = {
    email: null as string | null,
    login: null as string | null,
    isAuth: false as true | false,
    id: null as null | number,
    captchaUrl: null as string | null,
};

let authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                   ...action.payload

            };
        case GET_CAPTCHA_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            };
        default:
            return state;
    }
};

type setAuthProfileUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: {
        id: number | null
        email: string | null
        login: string | null
        isAuth: boolean
    }
};

export const setAuthProfileUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean ): setAuthProfileUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});

type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_SUCCESS,
    captchaUrl: string | null,
}

export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_SUCCESS, captchaUrl
});

export const getAuthProfileUser = (): ThunkType => {
    return async (dispatch) => {
        try {
            let data = await authProfileUserAPI.me();
            if (data.resultCode === ResultCodeEnum.Success) {
                await dispatch(setAuthProfileUserData(data.data.id, data.data.email, data.data.login, true));
            }
        } catch (error) {
            console.error(error)
        }
    }
};

export const getLoginUser = (email: string | null, password: string | null, rememberMe: boolean, captcha: string | null, setStatus: any): ThunkType => {
    return async (dispatch) => {
        try {
            let data = await authProfileUserAPI.login(email, password, rememberMe, captcha);
            if (data.resultCode === ResultCodeEnum.Success) {
                await dispatch(getAuthProfileUser())
            } else {
                setStatus(data.messages)
                if (data.resultCode === ResultCodeEnumCaptcha.Captcha) {
                    await dispatch(getCaptchaUrl());
                }
            }
        } catch (error) {
            console.error(error)
        }
    }
};


export const getCaptchaUrl = (): ThunkType => {
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


export const getLogoutUser = (captchaUrl: string): ThunkType => {
    return async (dispatch) => {
        try {
            let data = await authProfileUserAPI.logout();
            if (data.resultCode === ResultCodeEnum.Success) {
                dispatch(setAuthProfileUserData(null, null, null, false))
                dispatch(getCaptchaUrlSuccess(captchaUrl))
            }
        } catch (error) {
            console.error(error)
        }
    }
};


export default authReducer;