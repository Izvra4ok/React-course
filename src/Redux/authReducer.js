import {authProfileUserAPI} from "../DAL/api";

const SET_USER_DATA = "social-network/auth/SET_USER_DATA";

let initialState = {
    email: null,
    login: null,
    isAuth: false,
    id: null,
};


let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                login: action.data.login,
                id: action.data.id,
                email: action.data.email,
                isAuth: action.data.isAuth,
            };
        default:
            return state;
    }
}


export const setAuthProfileUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth}
});


export const getAuthProfileUser = () => {
    return async (dispatch) => {
        let response = await authProfileUserAPI.me();
        if (response.data.resultCode === 0) {
            // let {id, email, login} = data.data;
            dispatch(setAuthProfileUserData(response.data.data.id, response.data.data.email, response.data.data.login, true));
        }
    };
}


export const getLoginUser = (email, password, rememberMe, setStatus) => {
    return async (dispatch) => {
        let response = await authProfileUserAPI.login(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(getAuthProfileUser())
        } else {
            setStatus(response.data.messages)
        }
    };
};


export const getLogoutUser = () => {
    return async (dispatch) => {
        let response = await authProfileUserAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setAuthProfileUserData(null, null, null, null))
        }
    };
};


export default authReducer;