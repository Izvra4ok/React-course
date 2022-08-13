import React from "react";
import {connect} from "react-redux";
import FriendOnline from "./FriendOnline";
import {Navigate} from "react-router-dom";

class FriendOnlineContainer extends React.Component {
    render() {
        return <FriendOnline online={this.props.online}/>
    }
}

let mapStateToProps = (state) => {

    return {
        online: state.friendsPage.online
    }
};


export default connect(mapStateToProps)(FriendOnlineContainer)

