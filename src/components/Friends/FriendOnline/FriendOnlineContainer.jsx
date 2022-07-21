import React from "react";
import {connect} from "react-redux";
import FriendOnline from "./FriendOnline";
import {followFriendsAC, setFriendsAC, unfollowFriendsAC} from "../../../Redux/friendsPageReducer";



let mapStateToProps = (state) => {

    return {

        online: state.friendsPage.online

    }
};

let mapDispatchToProps = (dispatch) => {

    return {
        followUser: (userId) => {
            dispatch(followFriendsAC(userId));
        },
        unfollowUser: (userId) => {
            dispatch(unfollowFriendsAC(userId))
        },
        setUsers: (users) => {
            dispatch(setFriendsAC(users))
        },
    }
};

const FriendOnlineContainer = connect(mapStateToProps,mapDispatchToProps)(FriendOnline)

export default FriendOnlineContainer;
