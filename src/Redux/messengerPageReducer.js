const ADD_MESSAGE = "ADD-MESSAGE";


let initialstate = {

        dialogs: [
            {id: 1, avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                first: "Yura", last: "Grigas",},
            {id: 2, avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                first: "Alina", last: "Grigas",},
            {id: 3, avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                 first: "Denis", last: "Barzakouski",},
            {id: 4, avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
             first: "Anna", last: "Barzakouskaya",
            },
            {id: 5, avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                 first: "Vladimir", last: "Barzakouski",},
            {id: 6, avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                 first: "Alexsadra", last: "Grigas",
            },
            {id: 7, avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                 first: "Vova", last: "Barzakouski",},
            {id: 8, avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                first: "Raya", last: "Barzakouskaya",},
            {id: 9, avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                first: "Eva", last: "Barzakouskaya",},
        ],

        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Hello!#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;"},
            {id: 3, message: "Good bye"},
            {id: 4, message: "How are you?"},
            {id: 5, message: "Hello! I'm fine and you?"},
        ],

};

const messengerPageReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = action.newMessageText;
            if (newMessage === "") return state;
            return {
                ...state,
                messages: [...state.messages, {
                    id:6, message: newMessage,}]
        };
        default:
            return state;
    }
};

export const addMessage= (newMessageText) => ({type: ADD_MESSAGE,newMessageText});


export default messengerPageReducer;