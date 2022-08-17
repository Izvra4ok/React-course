import React from "react";
import {connect} from "react-redux";
import Friend from "./Friend";
import {followFriends, unfollowFriends} from "../../../Redux/friendsPageReducer";
import {compose} from "redux";


class FriendAllContainer extends React.Component {
    render() {
        return <Friend allfriends={this.props.allfriends}
                       followFriends={this.props.followFriends}
                       unfollowFriends={this.props.unfollowFriends}/>
    }

}

let mapStateToProps = (state) => {

    return {

        allfriends: state.friendsPage.allfriends

    }
};


export default compose(connect(mapStateToProps,{followFriends,unfollowFriends}))(FriendAllContainer)
