import React from "react";
import mod from "./Message.module.css";


const Message = (props) => {

    return (
        <div>
            {
                props.messages.map(m => <div className={mod.message} key={m.id}>
                    <div>{m.message}</div>
                </div>)
            }
        </div>
    );
};

export default Message;