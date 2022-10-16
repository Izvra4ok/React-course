import React, {useEffect} from "react";
import {Paginator} from "../common/Paginator";
import User from "./User/User";
import {
    actions,
    getFollowUsersThunkCreator,
    getUnfollowUserThunkCreator,
    getUsersThunkCreator,
    SearchFormType
} from "../../Redux/usersPageReducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPageSelector,
    getFollowingInProgressSelector,
    getIsFetchingSelector,
    getPageSizeSelector,
    getSearchUsersSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from "../../Redux/selectors/usersPageSelectors";
import {AnyAction} from "redux";
import Preloader from "../common/Preloader";
import ErrorBoundary from "../common/ErrorBoundary";
import {ErrorMsg} from "../common/ErrorMsg";


export const Users: React.FC = React.memo(() => {

    const dispatch = useDispatch();
    const pageSize = useSelector(getPageSizeSelector);
    const totalUsersCount = useSelector(getTotalUsersCountSelector);
    const search = useSelector(getSearchUsersSelector);
    const currentPage = useSelector(getCurrentPageSelector);
    const isFetching = useSelector(getIsFetchingSelector);
    const users = useSelector(getUsersSelector);
    const folllowingInProgress = useSelector(getFollowingInProgressSelector)

    const onSearchChanged = (search: SearchFormType) => {
        dispatch(getUsersThunkCreator(1, pageSize, search) as unknown as AnyAction)
    };

    const onPageChanged = (pageNumber: number = 1) => {
        dispatch(actions.setCurrentPage(pageNumber));
        getUsersThunkCreator(pageNumber, pageSize, search);
    };

    const unfollowUser = (userId: number) => {
        dispatch(getUnfollowUserThunkCreator(userId) as unknown as AnyAction)
    };

    const followUser = (userId: number) => {
        dispatch(getFollowUsersThunkCreator(userId) as unknown as AnyAction)
    };

    useEffect(() => {
        dispatch(getUsersThunkCreator(currentPage, pageSize, search) as unknown as AnyAction)
    }, [currentPage, pageSize, search, getUsersThunkCreator]);

    return <>
        {isFetching
            ? <Preloader/>
            : <ErrorBoundary ErrorComponent={ErrorMsg}>
                <Paginator onPageChanged={onPageChanged}
                           totalUsersCount={totalUsersCount}
                           pageSize={pageSize}
                           currentPage={currentPage}/>

                <User users={users}
                      search={search}
                      totalUsersCount={totalUsersCount}
                      folllowingInProgress={folllowingInProgress}
                      unfollowUser={unfollowUser}
                      followUser={followUser}
                      onSearchChanged={onSearchChanged}/>

                <Paginator onPageChanged={onPageChanged}
                           totalUsersCount={totalUsersCount}
                           pageSize={pageSize}
                           currentPage={currentPage}/>
            </ErrorBoundary>}
    </>
});


