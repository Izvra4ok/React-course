import {AnyAction} from "redux";
// import {ThunkAction} from "redux-thunk";
// import {AppStateType} from "./reduxStore";

type InitialStateType =  typeof initialstate;
// type ActionsType =
// type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsType>;
let initialstate = {

};

const navbarPageReducer = (state: InitialStateType = initialstate, action: AnyAction):InitialStateType => {

    return state;
};

export default navbarPageReducer;