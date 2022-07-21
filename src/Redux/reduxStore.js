import {combineReducers, legacy_createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import messengerPageReducer from "./messengerPageReducer";
import navbarPageReducer from "./navbarPageReducer";
import usersPageReducer from "./usersPageReducer";
import friendsPageReducer from "./friendsPageReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    friendsPage: friendsPageReducer,
    messengerPage: messengerPageReducer,
    navbarPage: navbarPageReducer,
    usersPage: usersPageReducer,
});

let store = legacy_createStore(reducers);

window.store = store;

export default store;