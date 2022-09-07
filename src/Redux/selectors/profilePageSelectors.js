import {createSelector} from "reselect";


const getProfileBasicSelector = (state) => {
    return state.profilePage.profile;
};

export const getProfileSelector = createSelector(getProfileBasicSelector,
    (profile) => {
        return profile;
    });


const getProfileStatusBasicSelector = (state) => {
    return state.profilePage.status;
};

export const getProfileStatusSelector = createSelector(getProfileStatusBasicSelector,
    (status) => {
        return status;
    });

const getProfilePostsBasicSelector = (state) => {
    return state.profilePage.posts
};

export const getProfilePostsSelector = createSelector(getProfilePostsBasicSelector,
    (posts) => {
        return posts;
    });