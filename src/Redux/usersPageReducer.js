import {usersAPI} from "../DAL/api";
import {updateObjectInArray} from "../utils/objectHelpers";

const FOLLOW_SUCCESS = "socialNetwork/usersPageReducer/FOLLOW_SUCCESS";
const UNFOLLOW_SUCCESS = "socialNetwork/usersPageReducer/UNFOLLOW_SUCCESS";
const SET_USERS = "socialNetwork/usersPageReducer/SET_USERS";
const SET_CURRENT_PAGE = "socialNetwork/usersPageReducer/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "socialNetwork/usersPageReducer/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "socialNetwork/usersPageReducer/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "socialNetwork/usersPageReducer/TOGGLE_IS_FOLLOWING_PROGRESS";


let initialState = {
    users: [],                               // request on server DAL for Users
    totalUsersCount: 0,                     // request on server DAL for count Users
    pageSize: 10,                           //default settings results page number users
    currentPage: 1,                         //default settings starting page number
    isFetching: true,                       // preloader active/disabled
    folllowingInProgress: [],            //only  one request on server DAL instead of many or disabled <button>
};


const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_SUCCESS:
            return {
                ...state,
                users: updateObjectInArray(state.users, "id", action.userId, {followed:true})
            }
        case UNFOLLOW_SUCCESS:
                return {
                    ...state,
                    users: updateObjectInArray(state.users, "id", action.userId, {followed:false})
                }
        case SET_USERS:
            return {
                ...state, users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                folllowingInProgress: action.isFetching
                    ? [...state.folllowingInProgress, action.userId]
                    : state.folllowingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followUserSuccess = (userId) => ({
    type: FOLLOW_SUCCESS, userId
});

export const unfollowUserSuccess = (userId) => ({
    type: UNFOLLOW_SUCCESS, userId
});

export const setUsers = (users) => ({
    type: SET_USERS, users
});

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE, currentPage
});

export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT, totalCount: totalUsersCount
})

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING, isFetching
});

export const toggleFollowingIsProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching, userId
});


export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true)); // preloader
    dispatch(setCurrentPage(currentPage))
    let data = await usersAPI.getUsersServer(currentPage, pageSize)
    dispatch(toggleIsFetching(false)); // preloader
    dispatch(setUsers(data.items)); // request on server DAL for Users
    dispatch(setTotalUsersCount(data.totalCount)); //request on server DAL for count Users
}


export const getFollowUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingIsProgress(true, userId));
    let data = await apiMethod(userId);

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingIsProgress(false, userId));

}
export const getUnfollowUserThunkCreator = (userId) => {
    return async (dispatch) => {
        getFollowUnfollowFlow(dispatch, userId, usersAPI.unfollowUsersServer.bind(usersAPI), unfollowUserSuccess);
    }
}


export const getFollowUsersThunkCreator = (userId) => {
    return async (dispatch) => {
        getFollowUnfollowFlow(dispatch, userId, usersAPI.followUsersServer.bind(usersAPI), followUserSuccess);
    }
}

export default usersPageReducer;