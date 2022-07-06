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
            newPostText: "Message from Post"
        },
        messengerPage: {
            dialogues: [
                {id: 1, first: "Yura", last: "Grigas"},
                {id: 2, first: "Alina", last: "Grigas"},
                {id: 3, first: "Denis", last: "Barzakouski"},
                {id: 4, first: "Anna", last: "Barzakouski"},

            ],
            messegaes: [
                {id: 1, text: "Hi"},
                {
                    id: 2,
                    text: "Hello!#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;#605e8e73;"
                },
                {id: 3, text: "Good bye"},
                {id: 4, text: "How are you?"},
                {id: 5, text: "Hello! I'm fine and you?"},
            ],
            newMessageText: "Message from Messenger"
        },
        friendsPage: {
            friends: [
                {id: 1, first: "Yura", last: "Grigas", age: 40, country: "Belarus", city: "Grodno",},
                {id: 2, first: "Alina", last: "Grigas", age: 18, country: "Belarus", city: "Grodno",},
                {id: 3, first: "Denis", last: "Barzakouski", age: 38, country: "The Netherlands", city: "Amsterdam",},
                {id: 4, first: "Anna", last: "Barzakouskaya", age: 38, country: "The Netherlands", city: "Amsterdam",},
                {id: 5, first: "Vladimir", last: "Barzakouski", age: 60, country: "Belarus", city: "Grodno",},
                {id: 6, first: "Alexsadra", last: "Grigas", age: 40, country: "Belarus", city: "Grodno",},
                {id: 7, first: "Vova", last: "Barzakouski", age: 8, country: "The Netherlands", city: "Amsterdam",},
                {id: 8, first: "Raya", last: "Barzakouskaya", age: 59, country: "Belarus", city: "Grodno",},
                {id: 9, first: "Eva", last: "Barzakouskaya", age: 4, country: "Belarus", city: "Grodno",},
            ],
        },

    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        alert("Stage changed")
    },
    addPost() {
        let newPost = {
            id: 6, message: this._state.profilePage.newPostText, likes: 0, first: "Denis", last: "Barzakouski",
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    addMessages() {
        let newMessage = {
            id: 6, text: this._state.messengerPage.newMessageText,
        };
        this._state.messengerPage.messegaes.push(newMessage);
        this._state.messengerPage.newMessageText = "";
        this._callSubscriber(this._state)
    },
    updateNewMessageText(newMessage) {
        this._state.messengerPage.newMessageText = newMessage;
        this._callSubscriber(this._state)
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },
};

export default store;
window.store = store;


