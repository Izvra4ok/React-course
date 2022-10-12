import {PostsType, PhotosType, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsType} from "./reduxStore";
import {profileAPI} from "../DAL/profile-API";
import {ResultCodeEnum} from "../DAL/api";


type InitialStateType = typeof initialstate;
type ActionsType = InferActionsType<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsType>;
type GetStateType = () => AppStateType;


const initialstate= {

    profile: null as  ProfileType | null,
    status: "",
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
        case "sn/profile/ADD-POST":
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
        case "sn/profile/DELETE_POST":
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            }
        case "sn/profile/SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile,
            }
        case "sn/profile/SET_PROFILE_STATUS":
            return {
                ...state,
                status: action.status,
            }
            case "sn/profile/UPLOAD_PHOTO_SUCCESS":
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        default:
            return state;

    }
};

export const actions = {
    addPost: (textarea: string) => ({
        type: "sn/profile/ADD-POST", textarea} as const),
    setUserProfile: (profile: ProfileType) => ({
        type: "sn/profile/SET_USER_PROFILE", profile} as const),
    setProfileStatus: (status: string) => ({
        type: "sn/profile/SET_PROFILE_STATUS", status} as const),
    deletePost: (postId: number)=> ({
        type: "sn/profile/DELETE_POST", postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({
        type: "sn/profile/UPLOAD_PHOTO_SUCCESS", photos} as const)
};


export const getProfileUserThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        try {
            let data = await profileAPI.getProfileUserServer(userId);
            dispatch(actions.setUserProfile(data));
        } catch (error) {
            console.error(error)
        }
    }
};


export const getProfileStatusThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        try {
            let data = await profileAPI.getProfileStatusServer(userId);
            dispatch(actions.setProfileStatus(data))
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
                dispatch(actions.setProfileStatus(status))
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
                dispatch(actions.savePhotoSuccess(data.data.photos))
            }
        } catch (error) {
            console.error("Something wrong", error)
        }
    }
};

export const updateProfileInfoThunkCreator = (formData: string, setStatus: (messages:Array<string>)=>void,
                                              setSubmitting: (setSubmitting: boolean)=>void, goToViewMode: ()=>void): ThunkType => {
    return async (dispatch, getState:GetStateType) => {
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