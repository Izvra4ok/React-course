import React from "react";
import mod from "./Messages.module.css";
import Message from "./Message/Message";
import TextareaFormMessages from "./TextareaFormMessage/TextareaFormMessages";
import {inStateMessagesType} from "../../../types/types";


type PropsType = {
    messages: Array<inStateMessagesType>,
    onAddMessageClick: (newMessageText: string) => void
};


const Messages: React.FC<PropsType> = React.memo((props) => {

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
});

export default Messages;