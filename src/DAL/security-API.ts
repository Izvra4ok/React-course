import {instance} from "./api";

type SecurityApiType = {
    url: string
};


export const securityAPI = {

    getCaptchaServer() {
        return instance.get<SecurityApiType>(`security/get-captcha-url`)
            .then((response) => {
                return response.data
            })
    }
};