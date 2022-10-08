import {getAuthProfileUser} from "./authReducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";

const INITIALIZATION_SUCCESS = "socialNetwork/appReducer/INITIALIZATION_SUCCESS";

type InitialStateType = typeof initialState;

type ActionsType = initializationSuccessActionType

type ThunkType = ThunkAction<Promise<void>, any, AppStateType, ActionsType>

const initialState = {
    initialized: false,
};

let appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case INITIALIZATION_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

type initializationSuccessActionType = { type: typeof INITIALIZATION_SUCCESS };

const initializationSuccess = (): initializationSuccessActionType =>  ({type: INITIALIZATION_SUCCESS,});

// export const getInitializedThunkCreator = () => async (dispatch) => {
//     await dispatch(getAuthUserData());
//     dispatch(setInitializedSuccess());
// }; //если несколько await то будут выполняться по очереди а Promise.all([...promise])- все сразу пока все не выполняться


export const getInitializedThunkCreator = (): ThunkType => {
    return async (dispatch) => {
        try {
        let promise = await dispatch(getAuthProfileUser());
        Promise.all([promise])
        dispatch(initializationSuccess())
    } catch (error) {
        console.error(error)}
    }
};


export default appReducer;