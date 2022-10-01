import {usersAPI} from "../DAL/api";
import {updateObjectInArray} from "../utils/objectHelpers";
import {AnyAction} from "redux";
import {folllowingInProgressType, UsersType} from "../types/types";


const FOLLOW_SUCCESS = "socialNetwork/usersPageReducer/FOLLOW_SUCCESS";
const UNFOLLOW_SUCCESS = "socialNetwork/usersPageReducer/UNFOLLOW_SUCCESS";
const SET_USERS = "socialNetwork/usersPageReducer/SET_USERS";
const SET_CURRENT_PAGE = "socialNetwork/usersPageReducer/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "socialNetwork/usersPageReducer/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "socialNetwork/usersPageReducer/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "socialNetwork/usersPageReducer/TOGGLE_IS_FOLLOWING_PROGRESS";


export type InitialStateType = typeof initialState;

const initialState = {
    users: [] as Array<UsersType>,
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    folllowingInProgress: [] as Array<folllowingInProgressType>
};


const usersPageReducer = (state: InitialStateType = initialState, action: AnyAction): InitialStateType => {
    switch (action.type) {
        case FOLLOW_SUCCESS:
            return {
                ...state,
                users: updateObjectInArray(state.users, "id", action.payload, {followed: true})
            }
        case UNFOLLOW_SUCCESS:
            return {
                ...state,
                users: updateObjectInArray(state.users, "id", action.payload, {followed: false})
            }
        case SET_USERS:
            return {
                ...state, users: action.payload
            };
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.payload
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.payload
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.payload
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                folllowingInProgress: action.payload as Array<toggleFollowingIsProgressType>
                    ? [...state.folllowingInProgress, action.payload]
                    : state.folllowingInProgress.filter(id => id !== action.payload)
            }
        default:
            return state;
    }
};

type followUserSuccessActionType = {
    type: typeof FOLLOW_SUCCESS,
    payload: number
};

export const followUserSuccess = (userId: number): followUserSuccessActionType => ({
    type: FOLLOW_SUCCESS,
    payload: userId
});

type unfollowUserSuccessActionType = {
    type: typeof UNFOLLOW_SUCCESS,
    payload: number
};

export const unfollowUserSuccess = (userId: number): unfollowUserSuccessActionType => ({
    type: UNFOLLOW_SUCCESS,
    payload: userId
});


type setUsersActionType = {
    type: typeof SET_USERS,
    payload: Array<UsersType>
}

export const setUsers = (users: Array<UsersType>): setUsersActionType => ({
    type: SET_USERS,
    payload: users
});

type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    payload: number,
};

export const setCurrentPage = (currentPage: number): setCurrentPageType => ({
    type: SET_CURRENT_PAGE,
    payload: currentPage
});

type setTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    payload: number
};

export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountType => ({
    type: SET_TOTAL_USERS_COUNT,
    payload: totalUsersCount
});

type toggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING,
    payload: boolean
};

export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({
    type: TOGGLE_IS_FETCHING,
    payload: isFetching
});

type toggleFollowingProgressType = {
    isFetching: boolean,
    userId: number,
};

type toggleFollowingIsProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    payload: toggleFollowingProgressType
};

export const toggleFollowingIsProgress = (isFetching: boolean, userId: number): toggleFollowingIsProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    payload: {isFetching, userId}
});


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        try {
            dispatch(toggleIsFetching(true)); // preloader
            dispatch(setCurrentPage(currentPage))
            let data = await usersAPI.getUsersServer(currentPage, pageSize)
            dispatch(toggleIsFetching(false)); // preloader
            dispatch(setUsers(data.items)); // request on server DAL for Users
            dispatch(setTotalUsersCount(data.totalCount)); //request on server DAL for count Users
        } catch (error) {
            console.error(error)
        }
    }
};


export const getFollowUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    try {
        dispatch(toggleFollowingIsProgress(true, userId));
        let data = await apiMethod(userId);
        if (data.resultCode === 0) {
            dispatch(actionCreator(userId));
        }
        dispatch(toggleFollowingIsProgress(false, userId));
    } catch (error) {
        console.error(error)
    }
};


export const getUnfollowUserThunkCreator = (userId: number) => {
    return async (dispatch: any) => {
        try {
            getFollowUnfollowFlow(dispatch, userId, usersAPI.unfollowUsersServer.bind(usersAPI), unfollowUserSuccess);
        } catch (error) {
            console.error(error)

        }
    }
};


export const getFollowUsersThunkCreator = (userId: number) => {
    return async (dispatch: any) => {
        try {
            getFollowUnfollowFlow(dispatch, userId, usersAPI.followUsersServer.bind(usersAPI), followUserSuccess);
        } catch (error) {
            console.error(error)
        }
    }
};


export default usersPageReducer;