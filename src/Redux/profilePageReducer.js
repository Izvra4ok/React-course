import {profileAPI} from "../API/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialstate = {

    profile: null,

    aboutme: [{
        avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Sergey Barzakouski", birthday: "18.08.1990", country: "Republic of Belarus, Grodno",
        university: "Yanka Kupala State University of Grodno, facult: Law'18", github: "github.com/Izvra4ok",
        job: "I'll be Frontend Developer",
    },],

    posts: [
        {id: 1, avatarUrl:"https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg",
            message: "Hello! What's new?", likes: 10, first: "Anna", last: "Barzakouskaya",},
        {id: 2, avatarUrl:"https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg",
            message: "Hi, how are you my friend?", likes: 15, first: "Alina", last: "Grigas",},
        {id: 3, avatarUrl:"https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg",
            message: "Good bye bro", likes: 25, first: "Denis", last: "Barzakouski",},
        {id: 4, avatarUrl:"https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg",
            message: "Good bye bro", likes: 25, first: "Denis", last: "Barzakouski",},
        {id: 5, avatarUrl:"https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg",
            message: "Good bye bro", likes: 25, first: "Denis", last: "Barzakouski",},
    ],

    newPostText: "",
};

const profilePageReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = state.newPostText;
            if (newPost === "") return state;
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 6, avatarUrl:"https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg",
                    message: newPost, likes:0, first: "Alina", last: "Grigas",}]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return state;

    }
};

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})


export const getProfileUser = (userId) => {
    return dispatch => {
        profileAPI.getProfileUserServer(userId)
            .then(data => {
                dispatch(setUserProfile(data)) //set User id with server API
            })
    }
}


export default profilePageReducer;