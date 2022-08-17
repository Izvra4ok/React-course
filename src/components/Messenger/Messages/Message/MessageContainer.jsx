import React from "react";
import Message from "./Message";
import {connect} from "react-redux";
import {compose} from "redux";

class MessageContainer extends React.Component {

    render() {
        return <Message messages={this.props.messages}/>

}
    }

let mapStateToProps = (state) => {
    return {
        messages: state.messengerPage.messages
    }
}

export default compose(connect(mapStateToProps))(MessageContainer)