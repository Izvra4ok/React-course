export type InStatePostsType = {
    id: number,
    avatarUrl: string,
    message: string,
    likes: number | null,
    first: string,
    last: string,
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

export type InStateProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType,
}

export type UsersType = {
    id: number,
    name: string,
    status: string,
    photos: ContactsType,
    followed: boolean,
};

export type folllowingInProgressType = {
    folllowingInProgress: boolean
};
