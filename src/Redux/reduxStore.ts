import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import messengerPageReducer from "./messengerPageReducer";
import navbarPageReducer from "./navbarPageReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";


let rootReducer = combineReducers({
    auth: authReducer,
    profilePage: profilePageReducer,
    messengerPage: messengerPageReducer,
    navbarPage: navbarPageReducer,
    usersPage: usersPageReducer,
    app: appReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

// @ts-ignore 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)
));
// @ts-ignore

window.__store__ = store;


export default store;