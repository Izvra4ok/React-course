import {combineReducers, legacy_createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import messengerPageReducer from "./messengerPageReducer";
import friendsPageReducer from "./friendsPageReducer";
import navbarPageReducer from "./navbarPageReducer";
import usersPageReducer from "./usersPageReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messengerPage: messengerPageReducer,
    friendsPage: friendsPageReducer,
    navbarPage: navbarPageReducer,
    usersPage: usersPageReducer,
});

let store = legacy_createStore(reducers);

window.store = store;

export default store;