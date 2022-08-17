import React from "react";
import OnlineFriends from "./OnlineFriends";
import {connect} from "react-redux";
import {compose} from "redux";


class OnlineFriendsContainer extends React.Component {

    render() {
        return (<OnlineFriends online={this.props.online}/>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        online: state.friendsPage.online
    }
}

export default compose(connect(mapStateToProps))(OnlineFriendsContainer)