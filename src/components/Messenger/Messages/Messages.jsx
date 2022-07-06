import React from "react";
import mod from "./Messages.module.css";
import TextAreaMessages from "./TextAreaMessage/TextAreaMessages";


const Messages = (props) => {
    return (
        <div>
            <div className={mod.messages}>
                <div className={mod.messages_items}>
                    {props.messages}
                </div>
            </div>
            <TextAreaMessages addmessages={props.addmessages}
                              newMessageText={props.newMessageText}
                              updateNewMessageText={props.updateNewMessageText}/>
        </div>
    );
};

export default Messages;