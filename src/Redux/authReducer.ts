import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsType} from "./reduxStore";
import {authAPI} from "../DAL/auth-API";
import {securityAPI} from "../DAL/security-API";
import {ResultCodeEnum, ResultCodeEnumCaptcha} from "../DAL/api";


type InitialStateType = typeof initialState;

type ActionsType = InferActionsType<typeof actions>;

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
        case "sn/auth/SET_USER_DATA":
            return {
                ...state,
                   ...action.payload

            };
        case "sn/auth/GET_CAPTCHA_SUCCESS":
            return {
                ...state,
                captchaUrl: action.captchaUrl
            };
        default:
            return state;
    }
};

export const actions = {
    setAuthProfileUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean ) => ({
        type: "sn/auth/SET_USER_DATA", payload: {id, email, login, isAuth} } as const),

    getCaptchaUrlSuccess: (captchaUrl: string | null) => ({
        type: "sn/auth/GET_CAPTCHA_SUCCESS", captchaUrl} as const)
};


export const getAuthProfileUser = (): ThunkType => {
    return async (dispatch) => {
        try {
            let data = await authAPI.me();
            if (data.resultCode === ResultCodeEnum.Success) {
                 dispatch(actions.setAuthProfileUserData(data.data.id, data.data.email, data.data.login, true));
            }
        } catch (error: any) {
            console.error(error)
        }
    }
};


export const getLoginUser = (email: string | null, password: string | null, rememberMe: boolean, captcha: string | null, setStatus: any): ThunkType => {
    return async (dispatch) => {
        try {
            let data = await authAPI.login(email, password, rememberMe, captcha);
            if (data.resultCode === ResultCodeEnum.Success) {
                await dispatch(getAuthProfileUser())
            } else {
                setStatus(data.messages)
                if (data.resultCode === ResultCodeEnumCaptcha.Captcha) {
                    await dispatch(getCaptchaUrl());
                }
            }
        } catch (error:any) {
            console.error(error)
        }
    }
};


export const getCaptchaUrl = (): ThunkType => {
    return async (dispatch) => {
        try {
            const data = await securityAPI.getCaptchaServer();
            const captchaUrl = data.url
            dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
        } catch (error:any) {
            console.error(error)
        }
    }
};


export const getLogoutUser = (): ThunkType => {
    return async (dispatch) => {
        try {
            let data = await authAPI.logout();
            if (data.resultCode === ResultCodeEnum.Success) {
                dispatch(actions.setAuthProfileUserData(null, null, null, false))
                dispatch(actions.getCaptchaUrlSuccess(null))
            }
        } catch (error:any) {
            console.error(error)
        }
    }
};


export default authReducer;