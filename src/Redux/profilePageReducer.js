import {profileAPI} from "../DAL/api";

const ADD_POST = "socialNetwork/profilePageReducer/ADD-POST";
const SET_USER_PROFILE = "socialNetwork/profilePageReducer/SET_USER_PROFILE";
const SET_PROFILE_STATUS = "socialNetwork/profilePageReducer/SET_PROFILE_STATUS";
const DELETE_POST = "socialNetwork/profilePageReducer/DELETE_POST";
const UPLOAD_PHOTO_SUCCESS = "socialNetwork/profilePageReducer/UPLOAD_PHOTO_SUCCESS";

let initialstate = {

    profile: null,

    status: "",

    posts: [
        {
            id: 1,
            avatarUrl: "https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg",
            message: "Hello! What's new?",
            likes: 10,
            first: "Anna",
            last: "Barzakouskaya",
        },
        {
            id: 2,
            avatarUrl: "https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg",
            message: "Hi, how are you my friend?",
            likes: 15,
            first: "Alina",
            last: "Grigas",
        },
        {
            id: 3,
            avatarUrl: "https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg",
            message: "Good bye bro",
            likes: 25,
            first: "Denis",
            last: "Barzakouski",
        },
        {
            id: 4,
            avatarUrl: "https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg",
            message: "Good bye bro",
            likes: 25,
            first: "Denis",
            last: "Barzakouski",
        },
        {
            id: 5,
            avatarUrl: "https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg",
            message: "Good bye bro",
            likes: 25,
            first: "Denis",
            last: "Barzakouski",
        },
    ],

};


const profilePageReducer = (state = initialstate, action) => {
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
                    first: "Alina",
                    last: "Grigas",
                }]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
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
                profile: {...state.profile,
                    photos: action.photos}
            }
        default:
            return state;

    }
};


export const addPost = (textarea) => ({
    type: ADD_POST, textarea
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
});

export const setProfileStatus = (status) => ({
    type: SET_PROFILE_STATUS, status
});

export const deletePost = (postId) => ({
    type: DELETE_POST, postId
});

export const savePhotoSuccess = (photos) => ({
    type: UPLOAD_PHOTO_SUCCESS, photos
});


export const getProfileUserThunkCreator = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfileUserServer(userId);
        dispatch(setUserProfile(response.data));
    };
};


export const getProfileStatusThunkCreator = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfileStatusServer(userId);
        dispatch(setProfileStatus(response.data))
    }
};


export const updateProfileStatusThunkCreator = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.getUpdateProfileStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(status))
        }
    }
};

export const saveAvatarProfileThunkCreator = (photos) => {
    return async (dispatch) => {
        let response = await profileAPI.uploadPhotoServer(photos)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
    }
};

export const updateProfileInfoThunkCreator = (formData, setStatus, setSubmitting, goToViewMode) => {
    return async (dispatch, getState) => {
        let response = await profileAPI.getUpdateProfileInfo(formData)
        if (response.data.resultCode === 0) {
            const userId = getState().auth.id
            goToViewMode()
            if (userId) {
                await dispatch(getProfileUserThunkCreator(userId))
            } else {
                throw new Error("userId can't be null")
            }
        } else {
            setStatus(response.data.messages)
        }
    }
};

export default profilePageReducer;