import React from "react";
import mod from "./Messages.module.css";



const Messages = (props) => {
    return (
        <div className={mod.messages}>
            <div className={mod.messages_items}>
                {props.messages}
            </div>

        </div>
    );
};

export default Messages;