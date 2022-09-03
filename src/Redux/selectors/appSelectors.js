import {createSelector} from "reselect";


const getAppInitializedBasicSelector = (state) => {
    return state.app.initialized;
};

export const getInitializedSelector = createSelector(getAppInitializedBasicSelector,
    (initialized) => {
    return initialized;
    });