import {createSelector} from "reselect";
import {AppStateType} from "../reduxStore";


const getProfileBasicSelector = (state: AppStateType) => {
    return state.profilePage.profile;
};

export const getProfileSelector = createSelector(getProfileBasicSelector,
    (profile) => {
        return profile;
    });


const getProfileStatusBasicSelector = (state: AppStateType) => {
    return state.profilePage.status;
};

export const getProfileStatusSelector = createSelector(getProfileStatusBasicSelector,
    (status) => {
        return status;
    });

const getProfilePostsBasicSelector = (state: AppStateType) => {
    return state.profilePage.posts
};

export const getProfilePostsSelector = createSelector(getProfilePostsBasicSelector,
    (posts) => {
        return posts;
    });