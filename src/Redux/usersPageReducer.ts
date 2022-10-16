import {updateObjectInArray} from "../utils/objectHelpers";
import {AppStateType, InferActionsType} from "./reduxStore";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {UsersType} from "../types/types";
import {usersAPI} from "../DAL/users-API";
import {ResponsedType, ResultCodeEnum} from "../DAL/api";


export type InitialStateType = typeof initialState;
type ActionsType = InferActionsType<typeof actions>;
export type SearchFormType = typeof initialState.search;
// type GetStateType = () => AppStateType;
// export type DispatchType = Dispatch<ActionsType>;
export type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsType>;


const initialState = {
    users: [] as Array<UsersType>,
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    folllowingInProgress: [] as Array<number>,
    search: {
        term: "",
        friend: null as null | boolean,
    }
};


const usersPageReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "sn/users/FOLLOW_SUCCESS":
            return {
                ...state,
                users: updateObjectInArray(state.users, "id", action.userId, {followed: true})
            }
        case "sn/users/UNFOLLOW_SUCCESS":
            return {
                ...state,
                users: updateObjectInArray(state.users, "id", action.userId, {followed: false})
            }
        case "sn/users/SET_USERS":
            return {
                ...state, users: action.users
            };
        case "sn/users/SET_CURRENT_PAGE":
            return {
                ...state, currentPage: action.currentPage
            };
        case "sn/users/SET_TOTAL_USERS_COUNT":
            return {
                ...state, totalUsersCount: action.totalUsersCount
            };
        case "sn/users/TOGGLE_IS_FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "sn/users/TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                folllowingInProgress: action.isFetching
                    ? [...state.folllowingInProgress, action.userId]
                    : state.folllowingInProgress.filter(id => id !== action.userId)
            }
        case "sn/users/SET_FILTER_USERS":
                return {
                    ...state,
                    search: action.payload
                }
        default:
            return state;
    }
};

export const actions = {
    followUserSuccess: (userId: number) => ({type: "sn/users/FOLLOW_SUCCESS", userId } as const),
    unfollowUserSuccess: (userId: number) => ({type: "sn/users/UNFOLLOW_SUCCESS", userId } as const),
    setUsers: (users: Array<UsersType>) => ({type: "sn/users/SET_USERS", users} as const),
    setFilterUsers: (search: SearchFormType) => ({type:"sn/users/SET_FILTER_USERS", payload:  search } as const),
    setCurrentPage: (currentPage: number) => ({type: "sn/users/SET_CURRENT_PAGE", currentPage } as const),
    setTotalUsersCount: (totalUsersCount: number) => ({type: "sn/users/SET_TOTAL_USERS_COUNT", totalUsersCount } as const ),
    toggleIsFetching: (isFetching: boolean) => ({type: "sn/users/TOGGLE_IS_FETCHING", isFetching } as const),
    toggleFollowingIsProgress: (isFetching: boolean, userId: number) => ({
        type: "sn/users/TOGGLE_IS_FOLLOWING_PROGRESS", isFetching, userId} as const )
};

export const setCurrentPageAC = actions.setCurrentPage;

export const getUsersThunkCreator = (currentPage: number, pageSize: number, search: SearchFormType): ThunkType => {
    return async (dispatch) => {
        try {
            dispatch(actions.toggleIsFetching(true)); // preloader
            dispatch(actions.setCurrentPage(currentPage));
            dispatch(actions.setFilterUsers(search));
            let data = await usersAPI.getUsersServer(currentPage, pageSize, search.term, search.friend);
            dispatch(actions.toggleIsFetching(false)); // preloader
            dispatch(actions.setUsers(data.items)); // request on server DAL for Users
            dispatch(actions.setTotalUsersCount(data.totalCount)); //request on server DAL for count Users
        } catch (error) {
            console.error(error)
        }
    }
};


export const getFollowUnfollowFlow = async (dispatch: Dispatch<ActionsType>, userId: number,
                                            apiMethod: (userId: number) => Promise<ResponsedType>,
                                            actionCreator: (userId: number) =>  ActionsType ) => {
    try {
        dispatch(actions.toggleFollowingIsProgress(true, userId));
        let data = await apiMethod(userId);
        if (data.resultCode === ResultCodeEnum.Success) {
            dispatch(actionCreator(userId));
        }
        dispatch(actions.toggleFollowingIsProgress(false, userId));
        if (data.resultCode === ResultCodeEnum.Error) {
          console.log(data.messages)
        }
    } catch (error) {
        console.error(error)
    }
};


export const getUnfollowUserThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        try {
            await getFollowUnfollowFlow(dispatch, userId, usersAPI.unfollowUsersServer.bind(usersAPI), actions.unfollowUserSuccess);
        } catch (error) {
            console.error(error)

        }
    }
};


export const getFollowUsersThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        try {
            await getFollowUnfollowFlow(dispatch, userId, usersAPI.followUsersServer.bind(usersAPI), actions.followUserSuccess);
        } catch (error) {
            console.error(error)
        }
    }
};


export default usersPageReducer;