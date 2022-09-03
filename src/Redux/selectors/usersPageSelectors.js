import {createSelector} from "reselect";


const getUsersBasicSelector = (state) => {
    return state.usersPage.users;
};

export const getUsersSelector  = createSelector(getUsersBasicSelector,
    (users) => {
        return users;
    });


const getTotalUsersCountBasicSelector = (state) => {
    return state.usersPage.totalUsersCount;
};

export const getTotalUsersCountSelector = createSelector(getTotalUsersCountBasicSelector,
    (totalUsersCount) => {
        return totalUsersCount;
    });


const getPageSizeBasicSelector = (state) => {
    return state.usersPage.pageSize
}

export const getPageSizeSelector  = createSelector(getPageSizeBasicSelector,
    (pageSize) => {
        return pageSize;
    });


const getCurrentPageBasicSelector = (state) => {
    return state.usersPage.currentPage;
};

export const getCurrentPageSelector  = createSelector(getCurrentPageBasicSelector,
    (currentPage) => {
    return currentPage;
    });


const getIsFetchingBasicSelector = (state) => {
    return state.usersPage.isFetching
}

export const getIsFetchingSelector  = createSelector(getIsFetchingBasicSelector,
    (isFetching) => {
    return isFetching;
    });


const getFolllowingInProgressBasicSelector = (state) => {
    return state.usersPage.folllowingInProgress
}

export const getFollowingInProgressSelector  = createSelector(getFolllowingInProgressBasicSelector,
    (folllowingInProgress) => {
    return folllowingInProgress;
    });
