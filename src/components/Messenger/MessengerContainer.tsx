import React from "react";
import Messenger from "./Messenger";
import {connect} from "react-redux";
import {WithAuthRedirectComponent} from "../../HOC/Redirect";
import {compose} from "redux";
import {getDialogsSelector, getMessagesSelector} from "../../Redux/selectors/messengerPageSelectors";
import {addMessage} from "../../Redux/messengerPageReducer";
import {AppStateType} from "../../Redux/reduxStore";
import {InStateDialogsType, inStateMessagesType} from "../../types/types";


type PropsType = {
    addMessage: (newMessageText: string) => void,
    messages: Array<inStateMessagesType>
    dialogs: Array<InStateDialogsType>
};

const MessengerContainer: React.FC<PropsType> = (props) => {

    let onAddMessageClick = (newMessageText: string)=> {
        props.addMessage(newMessageText);
    };

    return <Messenger messages={props.messages}
                      dialogs={props.dialogs}
                      onAddMessageClick={onAddMessageClick}/>
};


let mapStateToProps = (state: AppStateType) => ({
    messages: getMessagesSelector(state),
    dialogs: getDialogsSelector(state),
});


export default compose<React.ComponentType>(connect(mapStateToProps,
    {addMessage}))(WithAuthRedirectComponent(MessengerContainer));