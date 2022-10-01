import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "0305d498-3fdd-4e55-9cfb-5b30397b3cc1",
    },
});


export const usersAPI = {

    getUsersServer(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then((response) => {
                return response.data
            })
    },

    unfollowUsersServer(userId) {
        return instance.delete(`follow/${userId}`,)
            .then((response) => {
                return response.data
            })

    },

    followUsersServer(userId) {
        return instance.post(`follow/${userId}`,)
            .then((response) => {
                return response.data
            })
    },
};


export const profileAPI = {

    getProfileUserServer(userId) {
        return instance.get(`profile/${userId}`)
            .then((response) => {
                return response.data
            })
    },

    getProfileStatusServer(userId) {
        return instance.get(`profile/status/${userId}`)
            .then((response) => {
                return response.data
            })
    },

    getUpdateProfileStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then((response) => {
                return response.data
            })
    },

    uploadPhotoServer(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put("profile/photo", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
            .then((response) => {
                return response.data
            })
    },

    getUpdateProfileInfo(formData) {
        return instance.put(`profile`, formData)
            .then((response) => {
                return response.data
            })
    },
};


export const authProfileUserAPI = {

    me() {
        return instance.get(`auth/me`)
            .then((response) => {
                return response.data
            })
    },

    login(email, password, rememberMe = false, captcha) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
            .then((response) => {
                return response.data
            })
    },

    logout() {
        return instance.delete(`auth/login`)
            .then((response) => {
                return response.data
            })
    },
};


export const securityAPI = {

    getCaptchaServer() {
        return instance.get(`security/get-captcha-url`)
            .then((response) => {
                return response.data
            })
    }
};