import {usersAPI} from "../DAL/api";
import {updateObjectInArray} from "../utils/objectHelpers";
import {AppStateType} from "./reduxStore";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {UsersType} from "../types/types";
import {ResultCodeEnum} from "../types/apiType";


const FOLLOW_SUCCESS = "socialNetwork/usersPageReducer/FOLLOW_SUCCESS";
const UNFOLLOW_SUCCESS = "socialNetwork/usersPageReducer/UNFOLLOW_SUCCESS";
const SET_USERS = "socialNetwork/usersPageReducer/SET_USERS";
const SET_CURRENT_PAGE = "socialNetwork/usersPageReducer/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "socialNetwork/usersPageReducer/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "socialNetwork/usersPageReducer/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "socialNetwork/usersPageReducer/TOGGLE_IS_FOLLOWING_PROGRESS";


type InitialStateType = typeof initialState;

type ActionsType = followUserSuccessActionType | unfollowUserSuccessActionType | setUsersActionType | setCurrentPageType
    | setTotalUsersCountType | toggleIsFetchingType | toggleFollowingIsProgressType;

// type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionsType>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsType>;

const initialState = {
    users: [] as Array<UsersType>,
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    folllowingInProgress: [] as Array<number>
};

const usersPageReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW_SUCCESS:
            return {
                ...state,
                users: updateObjectInArray(state.users, "id", action.userId, {followed: true})
            }
        case UNFOLLOW_SUCCESS:
            return {
                ...state,
                users: updateObjectInArray(state.users, "id", action.userId, {followed: false})
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
                ...state, totalUsersCount: action.totalUsersCount
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
};
// type ActionsType = typeof actions
// const actions = {
// const actions = {
//     followUserSuccess: (userId: number) => ({type: FOLLOW_SUCCESS, userId}),
//     unfollowUserSuccess: ( userId: number) => ({type: UNFOLLOW_SUCCESS, userId}),
//     setUsers: (users: Array<UsersType>)=> ({type: SET_USERS, users}),
//     setCurrentPage: (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}),
//     setTotalUsersCount: (totalUsersCount: number)=> ({type: SET_TOTAL_USERS_COUNT, totalUsersCount}),
//     toggleIsFetching: (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching}),
//     toggleFollowingIsProgress: (isFetching: boolean, userId: number)=> ({type: TOGGLE_IS_FOLLOWING_PROGRESS,
//         isFetching,userId})// };

type followUserSuccessActionType = {
    type: typeof FOLLOW_SUCCESS, userId: number };

export const followUserSuccess = (userId: number): followUserSuccessActionType => ({
    type: FOLLOW_SUCCESS, userId});

type unfollowUserSuccessActionType = {
    type: typeof UNFOLLOW_SUCCESS, userId: number };

export const unfollowUserSuccess = (userId: number): unfollowUserSuccessActionType => ({
    type: UNFOLLOW_SUCCESS, userId});

type setUsersActionType = {
    type: typeof SET_USERS, users: Array<UsersType> };

export const setUsers = (users: Array<UsersType>): setUsersActionType => ({
    type: SET_USERS, users});

type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE, currentPage: number, };

export const setCurrentPage = (currentPage: number): setCurrentPageType => ({
    type: SET_CURRENT_PAGE, currentPage});

type setTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT, totalUsersCount: number };

export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountType => ({
    type: SET_TOTAL_USERS_COUNT, totalUsersCount});

type toggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING, isFetching: boolean };

export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({
    type: TOGGLE_IS_FETCHING, isFetching});

type toggleFollowingIsProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: boolean, userId: number };

export const toggleFollowingIsProgress = (isFetching: boolean, userId: number): toggleFollowingIsProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});


export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
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


export const getFollowUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any,
                                            actionCreator: (userId: number) => followUserSuccessActionType | unfollowUserSuccessActionType) => {
    try {
        dispatch(toggleFollowingIsProgress(true, userId));
        let data = await apiMethod(userId);
        if (data.resultCode === ResultCodeEnum.Success) {
            dispatch(actionCreator(userId));
        }
        dispatch(toggleFollowingIsProgress(false, userId));
    } catch (error) {
        console.error(error)
    }
};


export const getUnfollowUserThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        try {
            await getFollowUnfollowFlow(dispatch, userId, usersAPI.unfollowUsersServer.bind(usersAPI), unfollowUserSuccess);
        } catch (error) {
            console.error(error)

        }
    }
};


export const getFollowUsersThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        try {
            await getFollowUnfollowFlow(dispatch, userId, usersAPI.followUsersServer.bind(usersAPI), followUserSuccess);
        } catch (error) {
            console.error(error)
        }
    }
};


export default usersPageReducer;