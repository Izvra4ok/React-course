import profilePageReducer from "./profilePageReducer";
import messengerPageReducer from "./messengerPageReducer";

let store = {
    _state: {

        navbarPage: {
            onlinefriends: [
                {id: 1, first: "Yura", last: "Grigas", age: 40, country: "Belarus", city: "Grodno",},
                {id: 2, first: "Alina", last: "Grigas", age: 18, country: "Belarus", city: "Grodno",},
                {id: 3, first: "Denis", last: "Barzakouski", age: 38, country: "The Netherlands", city: "Amsterdam",},
                {id: 4, first: "Anna", last: "Barzakouskaya", age: 38, country: "The Netherlands", city: "Amsterdam",},
                {id: 5, first: "Vladimir", last: "Barzakouski", age: 38, country: "Belarus", city: "Grodno",},
                {id: 6, first: "Alexsadra", last: "Grigas", age: 60, country: "Belarus", city: "Grodno",},
                {id: 7, first: "Vova", last: "Barzakouski", age: 8, country: "The Netherlands", city: "Amsterdam",},
            ],
        },

        profilePage: {
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
        },

        messengerPage: {
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
            newMessageText: ""
        },

        friendsPage: {
            friends: [
                {id: 1, first: "Yura", last: "Grigas", age: 40, country: "Belarus", city: "Grodno",},
                {id: 2, first: "Alina", last: "Grigas", age: 18, country: "Belarus", city: "Grodno",},
                {id: 3, first: "Denis", last: "Barzakouski", age: 38, country: "The Netherlands", city: "Amsterdam",},
                {id: 4, first: "Anna", last: "Barzakouskaya", age: 38, country: "The Netherlands", city: "Amsterdam"},
                {id: 5, first: "Vladimir", last: "Barzakouski", age: 60, country: "Belarus", city: "Grodno",},
                {id: 6, first: "Alexsadra", last: "Grigas", age: 40, country: "Belarus", city: "Grodno",},
                {id: 7, first: "Vova", last: "Barzakouski", age: 8, country: "The Netherlands", city: "Amsterdam",},
                {id: 8, first: "Raya", last: "Barzakouskaya", age: 59, country: "Belarus", city: "Grodno",},
                {id: 9, first: "Eva", last: "Barzakouskaya", age: 4, country: "Belarus", city: "Grodno",},
            ],
        },
    },
    _callSubscribe() {
        alert("Stage changed")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },

    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.messengerPage = messengerPageReducer(this._state.messengerPage, action)

        this._callSubscribe(this._state)
    }}

export default store;


