const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {

    users: [
        // {
        //     id: 1, avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        //     followed: true, first: "Yura",
        //     last: "Grigas", age: 40, location: {country: "Belarus", city: "Grodno"}, status: "I'm boss"
        // },
        // {
        //     id: 2, avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        //     followed: false, first: "Alina", last: "Grigas", age: 18,
        //     location: {country: "Belarus", city: "Grodno"}, status: "I'm boss"
        // },
        // {
        //     id: 3, avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        //     followed: true, first: "Denis", last: "Barzakouski", age: 38,
        //     location: {country: "The Netherlands", city: "Amsterdam"}, status: "I'm boss"
        // },
        // {
        //     id: 4, avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        //     followed: true, first: "Anna", last: "Barzakouskaya", age: 38,
        //     location: {country: "The Netherlands", city: "Amsterdam"}, status: "I'm free"
        // },
        // {
        //     id: 5, avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        //     followed: true, first: "Vladimir", last: "Barzakouski", age: 60,
        //     location: {country: "Belarus", city: "Grodno",}, status: "Good bye"
        // },
        // {
        //     id: 6, avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        //     followed: false, first: "Alexsadra", last: "Grigas", age: 40,
        //     location: {country: "Belarus", city: "Grodno",}, status: "Hello"
        // },
        // {
        //     id: 7, avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        //     followed: true, first: "Vova", last: "Barzakouski", age: 8,
        //     location: {country: "The Netherlands", city: "Amsterdam",}, status: "Hi"
        // },
        // {
        //     id: 8, avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        //     followed: true, first: "Raya", last: "Barzakouskaya", age: 59,
        //     location: {country: "Belarus", city: "Grodno",}, status: ":)"
        // },
        // {
        //     id: 9, avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        //     followed: true, first: "Eva", last: "Barzakouskaya", age: 4,
        //     location: {country: "Belarus", city: "Grodno",}, status: "=)"
        // },
        // {
        //     id: 10, avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        //     followed: true, first: "Valentina", last: "Svorchuk", age: 23,
        //     location: {country: "Belarus", city: "Grodno"}, status: "Have a nice good day"
        // },
        // {
        //     id: 11, avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        //     followed: true, first: "Konstantin", last: "Svorchuk", age: 18,
        //     location: {country: "Belarus", city: "Grodno"}, status: "Have a nice good day"
        // },
        // {
        //     id: 12, avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        //     followed: true, first: "Valentina", last: "Svorchuk", age: 23,
        //     location: {country: "Belarus", city: "Grodno"}, status: "Have a nice good day"
        // },
    ],

}; 

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersPageReducer;