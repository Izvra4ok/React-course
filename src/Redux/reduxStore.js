import {applyMiddleware, combineReducers, compose,legacy_createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import messengerPageReducer from "./messengerPageReducer";
import navbarPageReducer from "./navbarPageReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer.ts";


let reducers = combineReducers({
    auth: authReducer,
    profilePage: profilePageReducer,
    messengerPage: messengerPageReducer,
    navbarPage: navbarPageReducer,
    usersPage: usersPageReducer,
    app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)
));
// let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;


export default store;