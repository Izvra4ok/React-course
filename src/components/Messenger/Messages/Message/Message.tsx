import React from "react";
import mod from "./Message.module.css";
import {inStateMessagesType} from "../../../../types/types";


type PropsType = {
    messages: Array<inStateMessagesType>,
};


const Message: React.FC<PropsType> = React.memo((props) => {

    return (
        <div>
            {
                props.messages.map(m => <div className={mod.message} key={m.id}>
                    <div>{m.message}</div>
                </div>)
            }
        </div>
    );
});

export default Message;