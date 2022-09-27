import React from "react";
import mod from "./Messages.module.css";
import Message from "./Message/Message";
import TextareaFormMessages from "./TextareaFormMessage/TextareaFormMessages";


const Messages = (props) => {

    return (
        <div>
            <div className={mod.messages}>
                <div className={mod.messages_items}>
                    <Message messages={props.messages}/>
                </div>
            </div>
            <TextareaFormMessages onAddMessageClick={props.onAddMessageClick} />
        </div>
    )
};

export default Messages;