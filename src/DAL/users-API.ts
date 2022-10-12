import {instance, ResponsedType} from "./api";

type GetUsersType = {
    items: Array<{
        id: number,
        name: string,
        status: string,
        followed: boolean,
        photos: {
            small: string | null,
            large: string | null,
        },
    }>,
    totalCount: number,
    error: string | null
};


export const usersAPI = {

    getUsersServer(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`,)
            .then((response) => {
                return response.data
            })
    },

    followUsersServer(userId: number) {
        return instance.post<ResponsedType>(`follow/${userId}`,)
            .then((response) => {
                return response.data
            })
    },

    unfollowUsersServer(userId: number) {
        return instance.delete<ResponsedType>(`follow/${userId}`,)
            .then((response) => {
                return response.data
            })

    },
};