import React from "react";
import Messenger from "./Messenger";
import {connect} from "react-redux";
import {WithAuthRedirectComponent} from "../../HOC/Redirect";
import {compose} from "redux";
import {getDialogsSelector, getMessagesSelector} from "../../Redux/selectors/messengerPageSelectors";
import {addMessage} from "../../Redux/messengerPageReducer";

const MessengerContainer = (props) => {

    let onAddMessageClick = (newMessageText) => {
        props.addMessage(newMessageText);
    };

    return <Messenger messages={props.messages}
                      dialogs={props.dialogs}
                      onAddMessageClick={onAddMessageClick}/>
};


let mapStateToProps = (state) => ({
    messages: getMessagesSelector(state),
    dialogs: getDialogsSelector(state),
})


export default compose(connect(mapStateToProps, {addMessage}))(WithAuthRedirectComponent(MessengerContainer));