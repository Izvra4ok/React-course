import {renderEntireTree} from "../render";

let state = {
    navbarPage: {
        onlinefriends: [
            {id: 1, first: "Yura", last: "Grigas"},
            {id: 2, first: "Alina", last: "Grigas"},
            {id: 3, first: "Denis", last: "Barzakouski"},
            {id: 4, first: "Anna", last: "Barzakouskaya"},
            {id: 5, first: "Vladimir", last: "Barzakouski"},
            {id: 6, first: "Alexsadra", last: "Grigas"},
            {id: 7, first: "Vova", last: "Barzakouski",},
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
        newPostText: "Write"


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
    },
    friendsPage: {
        friends: [
            {id: 1, first: "Yura", last: "Grigas", age: 40, country: "Belarus", city: "Grodno",},
            {id: 2, first: "Alina", last: "Grigas", age: 18, country: "Belarus", city: "Grodno",},
            {id: 3, first: "Denis", last: "Barzakouski", age: 38, country: "The Netherlands", city: "Amsterdam",},
            {id: 4, first: "Anna", last: "Barzakouskaya", age: 38, country: "The Netherlands", city: "Amsterdam",},
            {id: 5, first: "Vladimir", last: "Barzakouski", age: 38, country: "Belarus", city: "Grodno",},
            {id: 6, first: "Alexsadra", last: "Grigas", age: 60, country: "Belarus", city: "Grodno",},
            {id: 7, first: "Vova", last: "Barzakouski", age: 8, country: "The Netherlands", city: "Amsterdam",},
        ],
    },

};

export let addPost = () => {
    let newPost = {
        id: 6, message: state.profilePage.newPostText, likes: 0, first: "Denis", last: "Barzakouski",
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    renderEntireTree(state)
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state)
}

export let addMessages = (postMessage) => {
    let newMessage = {
        id: 6, text: postMessage,
    };
    state.messengerPage.messegaes.push(newMessage);
    renderEntireTree(state)
};


export default state;



