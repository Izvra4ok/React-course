import React from "react";
import {connect} from "react-redux";
import FriendOnline from "./FriendOnline";
import {compose} from "redux";


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


export default compose(connect(mapStateToProps))(FriendOnlineContainer)

