import {profileAPI} from "../DAL/api";
import {PostsType, PhotosType, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";
import {ResultCodeEnum} from "../types/apiType";


const ADD_POST = "socialNetwork/profilePageReducer/ADD-POST";
const SET_USER_PROFILE = "socialNetwork/profilePageReducer/SET_USER_PROFILE";
const SET_PROFILE_STATUS = "socialNetwork/profilePageReducer/SET_PROFILE_STATUS";
const DELETE_POST = "socialNetwork/profilePageReducer/DELETE_POST";
const UPLOAD_PHOTO_SUCCESS = "socialNetwork/profilePageReducer/UPLOAD_PHOTO_SUCCESS";


type InitialStateType = typeof initialstate;

type ActionsType = addPostActionType | SetUserProfileActionType | SetProfileStatusActionType
    | DeletePostActionType | SavePhotoSuccessActionType;

type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsType>;

const initialstate= {

    profile: null as  ProfileType | null,
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
    ] as Array<PostsType>

};


const profilePageReducer = (state: InitialStateType = initialstate, action: ActionsType): InitialStateType => {
        switch (action.type) {
        case ADD_POST:
            let newPost = action.textarea;
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
                posts: state.posts.filter(post => post.id !== action.postId)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                status: action.status,
            }
            case UPLOAD_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        default:
            return state;

    }
};

type addPostActionType = {
    type: typeof ADD_POST, textarea: string, };

export const addPost = (textarea: string): addPostActionType => ({
    type: ADD_POST, textarea,});

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE, profile: ProfileType};

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({
    type: SET_USER_PROFILE, profile});

type SetProfileStatusActionType = {
    type: typeof SET_PROFILE_STATUS, status: string, };

export const setProfileStatus = (status: string): SetProfileStatusActionType => ({
    type: SET_PROFILE_STATUS, status});

type DeletePostActionType = {
    type: typeof DELETE_POST, postId: number, };

export const deletePost = (postId: number): DeletePostActionType => ({
    type: DELETE_POST, postId,});

type SavePhotoSuccessActionType = {
    type: typeof UPLOAD_PHOTO_SUCCESS, photos: PhotosType };

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({
    type: UPLOAD_PHOTO_SUCCESS, photos,});


export const getProfileUserThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        try {
            let data = await profileAPI.getProfileUserServer(userId);
            dispatch(setUserProfile(data));
        } catch (error) {
            console.error(error)
        }
    }
};


export const getProfileStatusThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        try {
            let data = await profileAPI.getProfileStatusServer(userId);
            dispatch(setProfileStatus(data))
        } catch (error) {
            console.error(error)
        }
    }
};


export const updateProfileStatusThunkCreator = (status: string): ThunkType => {
    return async (dispatch) => {
        try {
            let data = await profileAPI.getUpdateProfileStatus(status)
            if (data.resultCode === ResultCodeEnum.Success) {
                dispatch(setProfileStatus(status))
            }
        } catch (error) {
            console.error("Something wrong", error)
        }
    }
};

export const saveAvatarProfileThunkCreator = (photoFile: File): ThunkType => {
    return async (dispatch) => {
        try {
            let data = await profileAPI.uploadPhotoServer(photoFile)
            if (data.resultCode === ResultCodeEnum.Success) {
                dispatch(savePhotoSuccess(data.data.photos))
            }
        } catch (error) {
            console.error("Something wrong", error)
        }
    }
};

export const updateProfileInfoThunkCreator = (formData: any, setStatus: any, setSubmitting: any, goToViewMode: any): ThunkType => {
    return async (dispatch, getState) => {
        try {
            let data = await profileAPI.getUpdateProfileInfo(formData)
            if (data.resultCode === ResultCodeEnum.Success) {
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