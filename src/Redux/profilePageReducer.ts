import {profileAPI} from "../DAL/api";
import {AnyAction} from "redux";
import {InStatePostsType, InStateProfileType, PhotosType} from "../types/types";

const ADD_POST = "socialNetwork/profilePageReducer/ADD-POST";
const SET_USER_PROFILE = "socialNetwork/profilePageReducer/SET_USER_PROFILE";
const SET_PROFILE_STATUS = "socialNetwork/profilePageReducer/SET_PROFILE_STATUS";
const DELETE_POST = "socialNetwork/profilePageReducer/DELETE_POST";
const UPLOAD_PHOTO_SUCCESS = "socialNetwork/profilePageReducer/UPLOAD_PHOTO_SUCCESS";

export type InitialStateType = typeof initialstate;

const initialstate= {

    profile: null as  InStateProfileType | null,
    status: "",
    newPost: "",
    posts: [
        {
            id: 1,
            avatarUrl: "https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg",
            message: "Hello! What's new?",
            likes: 10,
            first: "UserName",
            last: "UserLastName",
        },
        {
            id: 2,
            avatarUrl: "https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg",
            message: "Hi, how are you my friend?",
            likes: 15,
            first: "UserName",
            last: "UserLastName",
        },
        {
            id: 3,
            avatarUrl: "https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg",
            message: "Good bye bro",
            likes: 25,
            first: "UserName",
            last: "UserLastName",
        },
        {
            id: 4,
            avatarUrl: "https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg",
            message: "Good bye bro",
            likes: 25,
            first: "UserName",
            last: "UserLastName",
        },
        {
            id: 5,
            avatarUrl: "https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg",
            message: "Good bye bro",
            likes: 25,
            first: "UserName",
            last: "UserLastName",
        },
    ] as Array<InStatePostsType>

};


const profilePageReducer = (state: InitialStateType = initialstate, action: AnyAction): InitialStateType => {
        switch (action.type) {
        case ADD_POST:
            let newPost = action.payload;
            if (newPost === "") {
                return state
            }
            return {
                ...state,
                posts: [...state.posts, {
                    id: 6,
                    avatarUrl: "https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg",
                    message: newPost,
                    likes: 0,
                    first: "UserName",
                    last: "UserLastName",
                }]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.payload)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.payload,
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                status: action.payload,
            }
            case UPLOAD_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.payload} as InStateProfileType
            }
        default:
            return state;

    }
};

type addPostActionType = {
    type: typeof ADD_POST,
    payload: string,
};

export const addPost = (textarea: string): addPostActionType => ({
    type: ADD_POST,
    payload: textarea,
});

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    payload: InStateProfileType,
};

export const setUserProfile = (profile: InStateProfileType): SetUserProfileActionType => ({
    type: SET_USER_PROFILE,
    payload: profile,
});

type SetProfileStatusActionType = {
    type: typeof SET_PROFILE_STATUS,
    payload: string,
}

export const setProfileStatus = (status: string): SetProfileStatusActionType => ({
    type: SET_PROFILE_STATUS,
    payload: status,
});

type DeletePostActionType = {
    type: typeof DELETE_POST,
    payload: number,
}

export const deletePost = (postId: number): DeletePostActionType => ({
    type: DELETE_POST,
    payload: postId,
});

type SavePhotoSuccessActionType = {
    type: typeof UPLOAD_PHOTO_SUCCESS,
    payload: PhotosType
};

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({
    type: UPLOAD_PHOTO_SUCCESS,
    payload: photos,
});


export const getProfileUserThunkCreator = (userId: number) => {
    return async (dispatch: any) => {
        try {
            let data = await profileAPI.getProfileUserServer(userId);
            dispatch(setUserProfile(data));
        } catch (error) {
            console.error(error)
        }
    }
};


export const getProfileStatusThunkCreator = (userId: number) => {
    return async (dispatch: any) => {
        try {
            let data = await profileAPI.getProfileStatusServer(userId);
            dispatch(setProfileStatus(data))
        } catch (error) {
            console.error(error)
        }
    }
};


export const updateProfileStatusThunkCreator = (status: string) => {
    return async (dispatch: any) => {
        try {
            let data = await profileAPI.getUpdateProfileStatus(status)
            if (data.resultCode === 0) {
                dispatch(setProfileStatus(status))
            }
        } catch (error) {
            console.error("Something wrong", error)
        }
    }
};

export const saveAvatarProfileThunkCreator = (photos: PhotosType) => {
    return async (dispatch: any) => {
        try {
            let data = await profileAPI.uploadPhotoServer(photos)
            if (data.resultCode === 0) {
                dispatch(savePhotoSuccess(data.data.photos))
            }
        } catch (error) {
            console.error("Something wrong", error)
        }
    }
};

export const updateProfileInfoThunkCreator = (formData: any, setStatus: any, setSubmitting: any, goToViewMode: any) => {
    return async (dispatch: any, getState: any) => {
        try {
            let data = await profileAPI.getUpdateProfileInfo(formData)
            if (data.resultCode === 0) {
                const userId = getState().auth.id
                goToViewMode()
                if (userId) {
                    await dispatch(getProfileUserThunkCreator(userId))
                }
            } else {
                setStatus(data.messages)
            }
        } catch (error) {
            console.error(error)
        }
    }
};


export default profilePageReducer;