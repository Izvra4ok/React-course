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
            <TextAreaMessages newMessageText={props.newMessageText}
                              dispatch={props.dispatch}/>
        </div>
    );
};

export default Messages;