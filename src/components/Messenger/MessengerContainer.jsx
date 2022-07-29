import React from "react";
import Messenger from "./Messenger";
import {connect} from "react-redux";


class MessengerContainer extends React.Component {

    render() {
        return <Messenger />
    }
};

export default connect()(MessengerContainer);