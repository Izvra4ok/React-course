import React from "react";
import mod from "./Messages.module.css";
import TextareaMessagesContainer from "./TextareaMessage/TextareaMessagesContainer";


const Messages = (props) => {

    return (
        <div>
            <div className={mod.messages}>
                <div className={mod.messages_items}>
                    {props.messages}
                </div>
            </div>
            <TextareaMessagesContainer newMessageText={props.newMessageText}
                                       store={props.store}/>
        </div>
    );
};

export default Messages;