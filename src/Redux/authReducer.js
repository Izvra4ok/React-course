import {autProfileUserAPI} from "../API/api";

const SET_USER_DATA = "SET_USER_DATA";


let initialState = {
    email: null,
    login: null,
    isAuth: false,
    Id: null,
};


let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state;
    }
}


export const setAuthProfileUserData = (id, email, login) => ({type: SET_USER_DATA, data: id, email, login})


export const getAuthProfileUser = () => {

    return dispatch => {
        autProfileUserAPI.getAuthProfileUserServer()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthProfileUserData({id, email, login})); //auth
                }
            })
    }
}


export default authReducer;