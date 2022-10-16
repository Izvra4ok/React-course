import {createSelector} from "reselect";
import {AppStateType} from "../reduxStore";


const getUsersBasicSelector = (state: AppStateType) => {
    return state.usersPage.users;
};

export const getUsersSelector  = createSelector(getUsersBasicSelector,
    (users) => {
        return users;
    });


const getTotalUsersCountBasicSelector = (state: AppStateType) => {
    return state.usersPage.totalUsersCount;
};

export const getTotalUsersCountSelector = createSelector(getTotalUsersCountBasicSelector,
    (totalUsersCount) => {
        return totalUsersCount;
    });


const getPageSizeBasicSelector = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getPageSizeSelector  = createSelector(getPageSizeBasicSelector,
    (pageSize) => {
        return pageSize;
    });


const getCurrentPageBasicSelector = (state: AppStateType) => {
    return state.usersPage.currentPage;
};

export const getCurrentPageSelector  = createSelector(getCurrentPageBasicSelector,
    (currentPage) => {
    return currentPage;
    });


const getIsFetchingBasicSelector = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getIsFetchingSelector  = createSelector(getIsFetchingBasicSelector,
    (isFetching) => {
    return isFetching;
    });


const getFolllowingInProgressBasicSelector = (state: AppStateType) => {
    return state.usersPage.folllowingInProgress
}

export const getFollowingInProgressSelector  = createSelector(getFolllowingInProgressBasicSelector,
    (folllowingInProgress) => {
    return folllowingInProgress;
    });

const getSearchUsersBasicSelector = (state: AppStateType) => {
    return state.usersPage.search
}

export const getSearchUsersSelector  = createSelector(getSearchUsersBasicSelector,
    (search) => {
        return search;
    });
