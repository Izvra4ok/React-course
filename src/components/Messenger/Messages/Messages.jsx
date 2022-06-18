import React from "react";
import mod from "./Messages.module.css";


const  Messages = () => {
    return (
        <div className={mod.messages}>
            <div className={mod.messages_items}>
                <div className={mod.message}>Hi</div>
                <div className={`${mod.message} ${mod.active}`}>How are you</div>
                <div className={mod.message}>Good bye</div>
            </div>

        </div>
    );
};

export default Messages ;