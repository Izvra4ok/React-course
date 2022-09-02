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


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
        //getUsers: getUsersThunkCreator => dispatch preloader(true/false), request on server for Users and count//
    };

    onPageChanged = (pageNumber=1) => {
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

    render() {
        return <>
            {this.props.isFetching //pleloader active
                ? <Preloader styled={{width: "50px", height: "50px"}}/>
                : <Users users={this.props.users}
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
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        folllowingInProgress: state.usersPage.folllowingInProgress,
        isAuth: state.auth.isAuth,
    }
};


export default compose(connect(mapStateToProps,
    {getUsersThunkCreator, getUnfollowUserThunkCreator, getFollowUsersThunkCreator, setCurrentPage}),)(UsersContainer)


