import React from "react";
import mod from "./Messages.module.css";
import MessageContainer from "./Message/MessageContainer";
import TextareaMessagesFormContainer from "./TextareaFormMessage/TextareaMessagesFormContainer";


const Messages = (props) => {

    return (
        <div>
            <div className={mod.messages}>
                <div className={mod.messages_items}>
                    <MessageContainer/>
                </div>
            </div>
            <TextareaMessagesFormContainer />
        </div>
    )
};

export default Messages;