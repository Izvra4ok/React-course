import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../Redux/messengerPageReducer";
import TextareaMessages from "./TextareaMessages";

const TextareaMessagesContainer = (props) => {
    debugger


    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let updateNewMessageText = (text) => {
        // let action = updateNewMessageTextActionCreator(text)
        // props.store.dispatch(acion)
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <TextareaMessages updateNewMessageText={updateNewMessageText}
                          addMessage={addMessage}
                          newMessageText={props.newMessageText} />
    );
};

export default TextareaMessagesContainer;
