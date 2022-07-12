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
            {id: 1, text: "Hi"},
            {id: 2, text: "Hello!#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;"},
            {id: 3, text: "Good bye"},
            {id: 4, text: "How are you?"},
            {id: 5, text: "Hello! I'm fine and you?"},
        ],
        newMessageText: "",
};

const messengerPageReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: 6, text: state.newMessageText,};
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator= () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});

export default messengerPageReducer;