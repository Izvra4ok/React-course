import React from "react";
import {connect} from "react-redux";
import {followFriendsAC, setFriendsAC, unfollowFriendsAC} from "../../../Redux/friendsPageReducer";
import Friend from "./Friend";



let mapStateToProps = (state) => {

    return {

        allfriends: state.friendsPage.allfriends

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

const FriendAllContainer = connect(mapStateToProps,mapDispatchToProps)(Friend)

export default FriendAllContainer;
