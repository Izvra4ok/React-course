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
    ],

};


const profilePageReducer = (state = initialstate, action) => {
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
                profile: {
                    ...state.profile,
                    photos: action.payload
                }
            }
        default:
            return state;

    }
};


export const addPost = (textarea) => ({
    type: ADD_POST,
    payload: textarea,
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    payload: profile,
});

export const setProfileStatus = (status) => ({
    type: SET_PROFILE_STATUS,
    payload: status,
});

export const deletePost = (postId) => ({
    type: DELETE_POST,
    payload: postId,
});

export const savePhotoSuccess = (photos) => ({
    type: UPLOAD_PHOTO_SUCCESS,
    payload: photos,
});


export const getProfileUserThunkCreator = (userId) => {
    return async (dispatch) => {
        try {
            let data = await profileAPI.getProfileUserServer(userId);
            dispatch(setUserProfile(data));
        } catch (error) {
            console.error(error)
        }
    }
};


export const getProfileStatusThunkCreator = (userId) => {
    return async (dispatch) => {
        try {
            let data = await profileAPI.getProfileStatusServer(userId);
            dispatch(setProfileStatus(data))
        } catch (error) {
            console.error(error)
        }
    }
};


export const updateProfileStatusThunkCreator = (status) => {
    return async (dispatch) => {
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

export const saveAvatarProfileThunkCreator = (photos) => {
    return async (dispatch) => {
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

export const updateProfileInfoThunkCreator = (formData, setStatus, setSubmitting, goToViewMode) => {
    return async (dispatch, getState) => {
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