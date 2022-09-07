import React from "react";
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


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
        //getUsers: getUsersThunkCreator => dispatch preloader(true/false), request on server for Users and count//
    };

    onPageChanged = (pageNumber = 1) => {
        this.props.setCurrentPage(pageNumber); //will choice pageNumber and make bold font page//
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    }

    onClickUnfollowUsers = (userId) => {
        this.props.getUnfollowUserThunkCreator(userId);
        //=> dispatch toggleFollowingIsProgress(true/false),request .delete on server for userId and next dispatch unfollow
    }

    onClickFollowUsers = (userId) => {
        this.props.getFollowUsersThunkCreator(userId);
        //=> dispatch toggleFollowingIsProgress(true/false),request .post(add) on server for userId and next dispatch follow
    }

        slicedPages = () => {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        let carousel = this.props.currentPage;
        let carouselLeft = ((carousel - 5) < 0) ? 0 : carousel - 4;
        let carouselRight = carousel + 4;
        return pages.slice(carouselLeft, carouselRight);
    }

    render() {
        return <>
            {this.props.isFetching //pleloader active
                ? <Preloader styled={{width: "50px", height: "50px"}}/>
                : <Users users={this.props.users}
                         slicedPages={this.slicedPages}
                         totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         followUser={this.onClickFollowUsers}
                         unfollowUser={this.onClickUnfollowUsers}
                         onPageChanged={this.onPageChanged}
                         folllowingInProgress={this.props.folllowingInProgress}
                />}
        </>
    }
}


let mapStateToProps = (state) => {
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

export default compose(connect(mapStateToProps,
    {getUsersThunkCreator, getUnfollowUserThunkCreator, getFollowUsersThunkCreator, setCurrentPage}),)(UsersContainer)


