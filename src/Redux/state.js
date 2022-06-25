let state = {
    profilePage: {
        aboutme: [{
            id: 1,
            name: "Sergey Barzakouski",
            birthday: "18.08.1990",
            country: "Republic of Belarus, Grodno",
            university: "Yanka Kupala State University of Grodno, facult: Law'18",
            website: "github.com/Izvra4ok"
        },],
        posts:[
            {id: 1, message: "Hello! What's new?", likes: 10, first: "Sergey", last: "Barzakouski",},
            {id: 2, message: "Hi, how are you my friend?", likes: 15, first: "Alina", last: "Grigas",},
            {id: 3, message: "Good bye bro", likes: 25, first: "Denis", last: "Barzakouski",},
            {id: 4, message: "Good bye bro", likes: 25, first: "Denis", last: "Barzakouski",},
        ],
    },
    messengerPage: {
        dialogues: [
            {id: 1, name: "Sergey"},
            {id: 2, name: "Alina"},
            {id: 3, name: "Denis"},
            {id: 4, name: "Anna"},
            {id: 5, name: "Vladimir"},
        ],
        messegaes: [
            {id: 1, text: "Hi"},
            {id: 2, text: "Hello"},
            {id: 3, text: "Good bye"},
            {id: 4, text: "How are you?"},
        ],
    },
    friendsPage: {
        friends: [
            {id: 1, first: "Sergey", last: "Barzakouski", age: 31, country: "Belarus", city: "Grodno",},
            {id: 2, first: "Alina", last: "Grigas", age: 18, country: "Belarus", city: "Grodno",},
            {id: 3, first: "Vova", last: "Barzakouski", age: 7, country: "The Netherlands", city: "Amsterdam",},
            {id: 4, first: "Denis", last: "Barzakouski", age: 38, country: "The Netherlands", city: "Amsterdam",},
            {id: 5, first: "Anna", last: "Barzakouskay", age: 38, country: "The Netherlands", city: "Amsterdam",},
        ],
    },

};

export default state;




