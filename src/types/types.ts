/////ProfileReducerType/////////
export type PostsType = {
    id: number,
    avatarUrl: string,
    message: string,
    likes: number | null,
    name: string,
};

export type ContactsType = {
    github: string | null,
    vk: string | null,
    facebook: string | null,
    instagram: string | null,
    twitter: string | null,
    youtube: string | null,
    mainLink: string | null,
};

export type PhotosType = {
    small: string | null,
    large: string | null,
};

export type ProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType,
    aboutMe: string,
};

/////ProfileReducerType/////////

/////UsersReducerType//////
export type UsersType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean,
};

/////UsersReducerType//////

////MessengerReducerType////
export type InStateDialogsType = {
    id: number,
    avatarUrl: string,
    name: string,
};

export type inStateMessagesType = {
    id: number,
    message: string,
};

////MessengerReducerType////

/////Errors Boundary/////
export type ErrorMsgType = {
    error: ErrorMsg
};
type ErrorMsg = {
    message: string | null
};
/////Errors Boundary/////