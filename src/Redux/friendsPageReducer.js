
let initialstate = {
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
    onlinefriends: [
        {id: 1, first: "Yura", last: "Grigas", age: 40, country: "Belarus", city: "Grodno",},
        {id: 2, first: "Alina", last: "Grigas", age: 18, country: "Belarus", city: "Grodno",},
        {id: 3, first: "Denis", last: "Barzakouski", age: 38, country: "The Netherlands", city: "Amsterdam",},
        {id: 4, first: "Anna", last: "Barzakouskaya", age: 38, country: "The Netherlands", city: "Amsterdam",},
        {id: 5, first: "Vladimir", last: "Barzakouski", age: 38, country: "Belarus", city: "Grodno",},
        {id: 6, first: "Alexsadra", last: "Grigas", age: 60, country: "Belarus", city: "Grodno",},
        {id: 7, first: "Vova", last: "Barzakouski", age: 8, country: "The Netherlands", city: "Amsterdam",},
    ],


};

const friendsPageReducer = (state = initialstate, action) => {

            return state;

}

export default friendsPageReducer;