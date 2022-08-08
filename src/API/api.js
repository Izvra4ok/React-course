import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "a06710b5-0806-494d-b568-a01e9df6c4b1",
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
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,)
            .then(response => {
                return response.data
            })
    },
    followUsersServer(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,)
            .then(response => {
                return response.data
            })
    },
};

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`,)
            .then(response => {
                return response.data
            })

    },
}

export const autProfileUserAPI = {
    getAuthProfileUser() {
        return instance.get('auth/me',)
            .then(response => {
                return response.data
            })
    }
}