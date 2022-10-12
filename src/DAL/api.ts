import axios from "axios";


export const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "0305d498-3fdd-4e55-9cfb-5b30397b3cc1",
    },
});


export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeEnumCaptcha {
    Captcha = 10
}

export type ResponsedType<D = {}, RC = ResultCodeEnum> = {
    data: D,
    messages: [],
    resultCode: RC
}