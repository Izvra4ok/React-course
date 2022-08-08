import React from "react";
import {connect} from "react-redux";
import {
    followUser,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingIsProgress,
    toggleIsFetching,
    unfollowUser
} from "../../Redux/usersPageReducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {usersAPI} from "../../API/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true); // preloader
        usersAPI.getUsersServer(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false); // preloader
                this.props.setUsers(data.items); // request on server API for Users
                this.props.setTotalUsersCount(data.totalCount); //request on server API for count Users
            });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber); //default settings starting page number
        this.props.toggleIsFetching(true); // preloader
        usersAPI.getUsersServer(pageNumber, this.props.pageSize)  //default settings results page number users
            .then(data => {
                this.props.toggleIsFetching(false); // preloader
                this.props.setUsers(data.items); // request on server API for Users
            });
    }

    // unfollowUsersCall = (userId) => {
    //     usersAPI.unfollowUsersServer(this.props.user.id)
    //         .then(data => {
    //             debugger
    //             if (data.resultCode === 0) {
    //                 this.props.unfollowUser(this.props.user.id);
    //             }
    //         });
    // };

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader styled={{width: "50px", height: "50px"}}/>
                : <Users folllowingInProgress={this.props.folllowingInProgress}
                        toggleFollowingIsProgress={this.props.toggleFollowingIsProgress}
                         users={this.props.users}
                         totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged}
                         followUser={this.props.followUser}
                         unfollowUser={this.props.unfollowUser}/>}
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
    }
};


export default connect(mapStateToProps, {followUser, unfollowUser, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingIsProgress})(UsersContainer);


