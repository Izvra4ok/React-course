import {profileAPI} from "../DAL/api";

const ADD_POST = "socialNetwork/profilePageReducer/ADD-POST";
const SET_USER_PROFILE = "socialNetwork/profilePageReducer/SET_USER_PROFILE";
const SET_PROFILE_STATUS = "socialNetwork/profilePageReducer/SET_PROFILE_STATUS";
const DELETE_POST = "socialNetwork/profilePageReducer/DELETE_POST";

let initialstate = {

    profile: null,
    status: "",

    aboutme: [{
        avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Sergey Barzakouski", birthday: "18.08.1990", country: "Republic of Belarus, Grodno",
        university: "Yanka Kupala State University of Grodno, facult: Law'18", github: "github.com/Izvra4ok",
        job: "I'll be Frontend Developer",
    },],

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
        default:
            return state;

    }
};

export const addPost = (textarea) => ({type: ADD_POST, textarea});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId})


export const getProfileUserThunkCreator = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfileUserServer(userId);
    dispatch(setUserProfile(data));
};


export const getProfileStatusThunkCreator = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfileStatusServer(userId);
    dispatch(setProfileStatus(data))
}


export const updateProfileStatusThunkCreator = (status) => async (dispatch) => {
    let data = await profileAPI.getUpdateProfileStatus(status)
    if (data.resultCode === 0) {
        dispatch(setProfileStatus(status))
    }
}


export default profilePageReducer;