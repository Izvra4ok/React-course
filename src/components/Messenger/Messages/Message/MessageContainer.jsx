import React from "react";
import Message from "./Message";
import {connect} from "react-redux";
import {compose} from "redux";
import {getMessagesSelector} from "../../../../Redux/selectors/messengerPageSelectors";

class MessageContainer extends React.Component {

    render() {
        return <Message messages={this.props.messages}/>

}
    }

let mapStateToProps = (state) => {
    return {
        messages: getMessagesSelector(state),
    }
}

export default compose(connect(mapStateToProps))(MessageContainer)