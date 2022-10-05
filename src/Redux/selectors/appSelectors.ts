import {createSelector} from "reselect";
import {AppStateType} from "../reduxStore";


const getAppInitializedBasicSelector = (state: AppStateType) => {
    return state.app.initialized;
};

export const getInitializedSelector = createSelector(getAppInitializedBasicSelector,
    (initialized) => {
    return initialized;
    });