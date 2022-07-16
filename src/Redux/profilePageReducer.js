const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialstate = {
    aboutme: [{
        id: 0,
        name: "Sergey Barzakouski",
        birthday: "18.08.1990",
        country: "Republic of Belarus, Grodno",
        university: "Yanka Kupala State University of Grodno, facult: Law'18",
        website: "github.com/Izvra4ok"
    },],
    posts: [
        {id: 1, message: "Hello! What's new?", likes: 10, first: "Anna", last: "Barzakouskaya",},
        {id: 2, message: "Hi, how are you my friend?", likes: 15, first: "Alina", last: "Grigas",},
        {id: 3, message: "Good bye bro", likes: 25, first: "Denis", last: "Barzakouski",},
        {id: 4, message: "Good bye bro", likes: 25, first: "Denis", last: "Barzakouski",},
        {id: 5, message: "Good bye bro", likes: 25, first: "Denis", last: "Barzakouski",},
    ],
    newPostText: "",
};

const profilePageReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = state.newPostText;
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 6, message: newPost,likes:0, first: "Alina", last: "Grigas",}]
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        default:
            return state;

    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profilePageReducer;