import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import messengerPageReducer from "./messengerPageReducer";
import navbarPageReducer from "./navbarPageReducer";
import usersPageReducer from "./usersPageReducer";
import friendsPageReducer from "./friendsPageReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";


let reducers = combineReducers({
    auth: authReducer,
    profilePage: profilePageReducer,
    friendsPage: friendsPageReducer,
    messengerPage: messengerPageReducer,
    navbarPage: navbarPageReducer,
    usersPage: usersPageReducer,
    app: appReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;