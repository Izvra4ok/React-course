import {instance, ResponsedType, ResultCodeEnum} from "./api";

type ProfileUserType = {
    resultCode: number,
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: {
        github: string | null,
        vk: string | null,
        facebook: string | null,
        instagram: string | null,
        twitter: string | null,
        youtube: string | null,
        mainLink: string | null,
    }
    photos: {
        small: string | null,
        large: string | null,
    }
    aboutMe: string,
};

type ProfileUploadPhotoType = {
        photos: {
            small: string | null,
            large: string | null,
        }
    resultCode: ResultCodeEnum,
    messages: Array<string>
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
        return instance.put<ResponsedType>(`profile/status`, {status: status})
            .then((response) => {
                return response.data
            })
    },

    uploadPhotoServer(photoFile: File) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put<ResponsedType<ProfileUploadPhotoType>>("profile/photo", formData, {
            headers: {"Content-Type": "multipart/form-data",}
        })
            .then((response) => {
                return response.data
            })
    },

    getUpdateProfileInfo(formData: string) {
        return instance.put<ResponsedType>(`profile`, formData)
            .then((response) => {
                return response.data
            })
    },
};