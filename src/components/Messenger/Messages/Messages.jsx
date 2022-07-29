import React from "react";
import mod from "./Messages.module.css";
import TextareaMessagesContainer from "./TextareaMessage/TextareaMessagesContainer";
import MessageContainer from "./Message/MessageContainer";


const Messages = (props) => {

    return (
        <div>
            <div className={mod.messages}>
                <div className={mod.messages_items}>
                    <MessageContainer/>
                </div>
            </div>
            <TextareaMessagesContainer />
        </div>
    )
};

export default Messages;