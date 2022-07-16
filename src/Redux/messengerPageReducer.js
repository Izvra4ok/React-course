const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialstate = {
        dialogues: [
            {id: 1, first: "Yura", last: "Grigas"},
            {id: 2, first: "Alina", last: "Grigas"},
            {id: 3, first: "Denis", last: "Barzakouski"},
            {id: 4, first: "Anna", last: "Barzakouski"},

        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Hello!#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;"},
            {id: 3, message: "Good bye"},
            {id: 4, message: "How are you?"},
            {id: 5, message: "Hello! I'm fine and you?"},
        ],
        newMessageText: "",
};

const messengerPageReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages, {id:6, message: newMessage,}]
        };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage,
            };
        default:
            return state;
    }
};

export const addMessageActionCreator= () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});

export default messengerPageReducer;