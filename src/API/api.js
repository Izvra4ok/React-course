import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "4cc657c9-2f4f-40f6-a0f8-a3f6d223c869",
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
    }
};


export const autProfileUserAPI = {
    getAuthProfileUserServer() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
};