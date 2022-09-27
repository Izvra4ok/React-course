import {getAuthProfileUser} from "./authReducer";

const INITIALIZATION_SUCCESS = "socialNetwork/appReducer/INITIALIZATION_SUCCESS";

let initialState = {
    initialized: false,
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZATION_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
}


const initializationSuccess = () => ({
    type: INITIALIZATION_SUCCESS,
})

// export const getInitializedThunkCreator = () => async (dispatch) => {
//     await dispatch(getAuthUserData());
//     dispatch(setInitializedSuccess());
// }; //если несколько await то будут выполняться по очереди а Promise.all([...promise])- все сразу пока все не выполняться


export const getInitializedThunkCreator = () => {
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