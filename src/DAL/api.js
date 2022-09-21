import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "9ebfcc01-124d-422b-8983-c6a0931c594a",
    },

});


export const usersAPI = {

    getUsersServer(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
    },

    unfollowUsersServer(userId) {
        return instance.delete(`follow/${userId}`,)
    },

    followUsersServer(userId) {
        return instance.post(`follow/${userId}`,)
    },
};


export const profileAPI = {

    getProfileUserServer(userId) {
        return instance.get(`profile/${userId}`)
    },

    getProfileStatusServer(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    getUpdateProfileStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },

    uploadPhotoServer(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put("profile/photo", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
    },

    getUpdateProfileInfo(formData) {
            return instance.put(`profile`, formData)
    },
};


export const authProfileUserAPI = {

    me() {
        return instance.get(`auth/me`)
    },

    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },

    logout() {
        return instance.delete(`auth/login`)
    },
};