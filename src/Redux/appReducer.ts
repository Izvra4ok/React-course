import {getAuthProfileUser} from "./authReducer";
import {AnyAction} from "redux";


const INITIALIZATION_SUCCESS = "socialNetwork/appReducer/INITIALIZATION_SUCCESS";

export type InitialStateType = typeof initialState;

const initialState = {
    initialized: false,
};

let appReducer = (state: InitialStateType = initialState, action: AnyAction): InitialStateType => {
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

type initializationSuccessActionType = {
    type: typeof INITIALIZATION_SUCCESS
};

const initializationSuccess = (): initializationSuccessActionType =>  ({
    type: INITIALIZATION_SUCCESS,
});

// export const getInitializedThunkCreator = () => async (dispatch) => {
//     await dispatch(getAuthUserData());
//     dispatch(setInitializedSuccess());
// }; //если несколько await то будут выполняться по очереди а Promise.all([...promise])- все сразу пока все не выполняться


export const getInitializedThunkCreator = () => {
    return async (dispatch: any) => {
        try {
        let promise = await dispatch(getAuthProfileUser());
        Promise.all([promise])
        dispatch(initializationSuccess())
    } catch (error) {
        console.error(error)}
    }
};


export default appReducer;