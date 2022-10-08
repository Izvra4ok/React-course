import axios from "axios";
import {
    AuthLoginType,
    AuthLogoutType,
    AuthMeType, ProfileStatusUpdateType, ProfileUpdateType, ProfileUploadPhotoType,
    ProfileUserType,
    UsersGetUsersType,
} from "../types/apiType";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "0305d498-3fdd-4e55-9cfb-5b30397b3cc1",
    },
});


export const usersAPI = {

    getUsersServer(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<UsersGetUsersType>(`users?page=${currentPage}&count=${pageSize}`,)
            .then((response) => {
                return response.data
            })
    },

    unfollowUsersServer(userId: number) {
        return instance.delete<number>(`follow/${userId}`,)
            .then((response) => {
                return response.data
            })

    },

    followUsersServer(userId: number) {
        return instance.post<number>(`follow/${userId}`,)
            .then((response) => {
                return response.data
            })
    },
};


export const profileAPI = {

    getProfileUserServer(userId: number) {
        return instance.get<ProfileUserType>(`profile/${userId}`)
            .then((response) => {
                return response.data
            })
    },

    getProfileStatusServer(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
            .then((response) => {
                return response.data
            })
    },

    getUpdateProfileStatus(status: string) {
        return instance.put<ProfileStatusUpdateType>(`profile/status`, {status: status})
            .then((response) => {
                return response.data
            })
    },

    uploadPhotoServer(photoFile: File) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put<ProfileUploadPhotoType>("profile/photo", formData, {
            headers: {"Content-Type": "multipart/form-data",}})
            .then((response) => {
                return response.data
            })
    },

    getUpdateProfileInfo(formData: string) {
        return instance.put<ProfileUpdateType>(`profile`, formData)
            .then((response) => {
                return response.data
            })
    },
};


export const authProfileUserAPI = {
    me() {
        return instance.get<AuthMeType>(`auth/me`)
            .then((response) => {
                return response.data
            })
    },

    login(email: string | null, password: string | null, rememberMe: boolean = false, captcha: string | null) {
        return instance.post<AuthLoginType>(`auth/login`, {email, password, rememberMe, captcha})
            .then((response) => {
                return response.data
            })
    },

    logout() {
        return instance.delete<AuthLogoutType>(`auth/login`)
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