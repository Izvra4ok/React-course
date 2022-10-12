import {getAuthProfileUser} from "./authReducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsType} from "./reduxStore";


type InitialStateType = typeof initialState;

type ActionsType = InferActionsType<typeof actions>

type ThunkType = ThunkAction<Promise<void>, any, AppStateType, ActionsType>

const initialState = {
    initialized: false,
};

let appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "sn/app/INITIALIZATION_SUCCESS":
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

const actions = {
     initializationSuccess: () => ({type: "sn/app/INITIALIZATION_SUCCESS"})
};


export const getInitializedThunkCreator = (): ThunkType => {
    return async (dispatch) => {
        try {
        let promise = await dispatch(getAuthProfileUser());
        Promise.all([promise])
        dispatch(actions.initializationSuccess())
    } catch (error) {
        console.error(error)}
    }
};


export default appReducer;