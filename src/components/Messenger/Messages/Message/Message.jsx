import React from "react";
import mod from "./Message.module.css";


const Message = (props) => {
    return (
        <div className={mod.message}>{props.message} {props.id}</div>
    );
};

export default Message;