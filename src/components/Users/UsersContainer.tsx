import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    getFollowUsersThunkCreator,
    getUnfollowUserThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
} from "../../Redux/usersPageReducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {compose} from "redux";
import {
    getCurrentPageSelector,
    getFollowingInProgressSelector,
    getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from "../../Redux/selectors/usersPageSelectors";
import {getIsAuthSelector} from "../../Redux/selectors/authSelectors";
import ErrorBoundary from "../common/ErrorBoundary";
import {ErrorMsgType, UsersType} from "../../types/types";
import {AppStateType} from "../../Redux/reduxStore";


type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    users: Array<UsersType>,
    folllowingInProgress: Array<number>,
    isFetching: boolean,

    getUsersThunkCreator: (currentPage: number, pageSize: number) => void,
    setCurrentPage: (pageNumber: number) => void,
    getUnfollowUserThunkCreator: (userId: number) => void,
    getFollowUsersThunkCreator: (userId: number) => void,
};


const UsersContainer: React.FC<PropsType> = (props) => {

    const currentPage = props.currentPage;
    const pageSize = props.pageSize;
    const getUsersThunkCreator = props.getUsersThunkCreator;

    useEffect(() => {
        getUsersThunkCreator(currentPage, pageSize)
    }, [currentPage, pageSize, getUsersThunkCreator]);

    let onPageChanged = (pageNumber:number = 1) => {
        props.setCurrentPage(pageNumber);
        props.getUsersThunkCreator(pageNumber, props.pageSize);
    };

    let onClickUnfollowUsers = (userId: number) => {
        props.getUnfollowUserThunkCreator(userId);
    };

    let onClickFollowUsers = (userId: number) => {
        props.getFollowUsersThunkCreator(userId);
    };

    const ErrorMsg = (error: ErrorMsgType) => {
        return (
            <div>
                <Preloader/>
                <div> Something went wrong!</div>
                <div> {error.error.message}</div>
            </div>
        );
    };

    return <>
        {props.isFetching
            ? <Preloader/>
            : <ErrorBoundary ErrorComponent={ErrorMsg}>
                <Users users={props.users}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       followUser={onClickFollowUsers}
                       unfollowUser={onClickUnfollowUsers}
                       onPageChanged={onPageChanged}
                       folllowingInProgress={props.folllowingInProgress}
                />
            </ErrorBoundary>}
    </>
};


let mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsersSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        pageSize: getPageSizeSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        folllowingInProgress: getFollowingInProgressSelector(state),
        isAuth: getIsAuthSelector(state),
    }
};


export default compose<React.ComponentType>(connect(mapStateToProps,
    {getUsersThunkCreator, getUnfollowUserThunkCreator, getFollowUsersThunkCreator, setCurrentPage}),)(UsersContainer)


