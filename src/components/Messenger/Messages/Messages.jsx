import React from "react";
import mod from "./Messages.module.css";
import TextareaMessagesContainer from "./TextareaMessage/TextareaMessagesContainer";


const Messages = (props) => {

    return (
        <div>
            <div className={mod.messages}>
                <div className={mod.messages_items}>
                    {props.mapStateMessage}
                </div>
            </div>
            <TextareaMessagesContainer />
        </div>
    )
};

export default Messages;