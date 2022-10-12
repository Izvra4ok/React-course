import {instance, ResponsedType, ResultCodeEnum, ResultCodeEnumCaptcha} from "./api";


type AuthMeType = {
     id: number, email: string, login: string
};

type AuthLoginType = {
    userId: number
};

type AuthLogoutType = {
    data: string,
};


export const authAPI = {
    me() {
        return instance.get<ResponsedType<AuthMeType>>(`auth/me`)
            .then((response) => {
                return response.data
            })
    },

    login(email: string | null, password: string | null, rememberMe: boolean = false, captcha: string | null) {
        return instance.post<ResponsedType<AuthLoginType, ResultCodeEnum | ResultCodeEnumCaptcha>>(`auth/login`, {email, password, rememberMe, captcha})
            .then((response) => {
                return response.data
            })
    },

    logout() {
        return instance.delete<ResponsedType<AuthLogoutType>>(`auth/login`)
            .then((response) => {
                return response.data
            })
    },
};