import {InferActionsType} from "./reduxStore";
import {AnyAction} from "redux";
// import {ThunkAction} from "redux-thunk";
// import {AppStateType} from "./reduxStore";


type InitialStateType =  typeof initialstate;
// type ActionsType = InferActionsType<typeof actions>;
// type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsType>;


const initialstate = {

};

const navbarPageReducer = (state: InitialStateType = initialstate, action: AnyAction):InitialStateType => {

    return state;
};

export default navbarPageReducer;