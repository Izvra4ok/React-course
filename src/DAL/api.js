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
            .then(response => {
                return response.data
            })
    },

    unfollowUsersServer(userId) {
        return instance.delete(`follow/${userId}`,)
            .then(response => {
                return response.data
            })
    },

    followUsersServer(userId) {
        return instance.post(`follow/${userId}`,)
            .then(response => {
                return response.data
            })
    }
};


export const profileAPI = {

    getProfileUserServer(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },

    getProfileStatusServer(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },

    getUpdateProfileStatus(status) {
        return instance.put(`profile/status`, {status:status})
            .then(response => {
                return response.data
            })
    },
};


export const authProfileUserAPI = {

    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },

    login(email,password, rememberMe) {
        return instance.post(`auth/login`,{email,password, rememberMe})
            .then(response => {
                return response.data
            })
    },

    logout(){
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data
            })
    },
};