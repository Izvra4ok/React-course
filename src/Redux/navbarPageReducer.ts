import {AnyAction} from "redux";

export type InitialStateType =  typeof initialstate;

let initialstate = {

};

const navbarPageReducer = (state: InitialStateType = initialstate, action: AnyAction):InitialStateType => {

    return state;
};

export default navbarPageReducer;