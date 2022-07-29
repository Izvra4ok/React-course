import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";

class FriendsContainer extends React.Component {

    render() {
        return <Friends/>
    }
}

export default connect()(FriendsContainer);