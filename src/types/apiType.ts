export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeEnumCaptcha {
    Captcha = 10
}


export type UsersGetUsersType = {
    items: {
        id: number, name: string, status: string, photos: { small: string, large: string },
        followed: boolean
    }
    totalCount: number,
    error: string
};

export type ProfileUserType = {
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

export type ProfileStatusUpdateType = {
    resultCode: ResultCodeEnum,
    status: string
};

export type ProfileUploadPhotoType = {
    data: {
        photos: {
            small: string | null,
            large: string | null,
        }
    }
    resultCode: ResultCodeEnum,
    messages: Array<string>
};

export type ProfileUpdateType = {
    resultCode: ResultCodeEnum,
    messages: Array<string>,
    data: Array<string>
}

export type AuthMeType = {
    data: { id: number, email: string, login: string },
    resultCode: ResultCodeEnum,
    messages: Array<string>,
};

export type AuthLoginType = {
    resultCode: ResultCodeEnum | ResultCodeEnumCaptcha
    messages: Array<string>,
    data: { userId: number }
};

export type AuthLogoutType = {
    resultCode: ResultCodeEnum,
    messages: Array<string>,
    data: string,
};
