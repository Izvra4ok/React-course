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
import {createSearchParams, useLocation, useNavigate,} from "react-router-dom";

export const Users: React.FC = React.memo(() => {

    const dispatch = useDispatch();
    const pageSize = useSelector(getPageSizeSelector);
    const totalUsersCount = useSelector(getTotalUsersCountSelector);
    const filter = useSelector(getSearchUsersSelector);
    const currentPage = useSelector(getCurrentPageSelector);
    const isFetching = useSelector(getIsFetchingSelector);
    const users = useSelector(getUsersSelector);
    const folllowingInProgress = useSelector(getFollowingInProgressSelector);

    const useNavigateSearch = () => {
        const navigate = useNavigate();
        return (pathname: any, params: any) =>
            navigate(`${pathname}?${createSearchParams(params)}`);
    };
    const navigateSearch = useNavigateSearch();

    useEffect(() => {
        navigateSearch("/users", {
            page: `${currentPage}`,
            count: `${pageSize}`,
            term: `${filter.term}`,
            friend: `${filter.friend}`,
        })}, [filter, currentPage, pageSize]);

    const location = useLocation();

    useEffect(() => {

        const query = new URLSearchParams(location.search);

        let actualPage = currentPage;
        let actualFilter = filter;

        const queryFriend = query.get("friend");
        const queryPage = query.get("page");
        const queryTerm = query.get("term");

        if (queryPage) {actualPage = Number(queryPage)}

        if (queryTerm)
            actualFilter = { ...actualFilter, term: queryTerm };

        switch (queryFriend) {
            case "null":
                actualFilter = { ...actualFilter, friend: null };
                break;
            case "true":
                actualFilter = { ...actualFilter, friend: true };
                break;
            case "false":
                actualFilter = { ...actualFilter, friend: false };
                break;
            default:
                break;
        }
        dispatch(getUsersThunkCreator(actualPage, pageSize, actualFilter) as unknown as AnyAction);
    }, [location.search]);


    const onSearchChanged = (filter: SearchFormType) => {
        dispatch(getUsersThunkCreator(1, pageSize, filter) as unknown as AnyAction)
    };

    const onPageChanged = (pageNumber: number = 1) => {
        dispatch(actions.setCurrentPage(pageNumber));
        getUsersThunkCreator(pageNumber, pageSize, filter);
    };

    const unfollowUser = (userId: number) => {
        dispatch(getUnfollowUserThunkCreator(userId) as unknown as AnyAction)
    };

    const followUser = (userId: number) => {
        dispatch(getFollowUsersThunkCreator(userId) as unknown as AnyAction)
    };

    return <>
        {isFetching
            ? <Preloader/>
            : <ErrorBoundary ErrorComponent={ErrorMsg}>
                <Paginator onPageChanged={onPageChanged}
                           totalUsersCount={totalUsersCount}
                           pageSize={pageSize}
                           currentPage={currentPage}/>

                <User users={users}
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


