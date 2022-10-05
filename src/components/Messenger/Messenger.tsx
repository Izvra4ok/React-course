import React from "react";
import mod from "./Messenger.module.css";
import Dialogs from "./Dialogues/Dialogs";
import Messages from "./Messages/Messages";
import {InStateDialogsType, inStateMessagesType} from "../../types/types";

type PropsType = {
    dialogs: Array<InStateDialogsType>,
    messages: Array<inStateMessagesType>,
    onAddMessageClick: (newMessageText: string) => void
}

const Messenger: React.FC<PropsType> = (props) => {

    return (
        <section className={mod.messenger}>
            <Dialogs dialogs={props.dialogs} />
            <Messages messages={props.messages}
                      onAddMessageClick={props.onAddMessageClick}/>
        </section>
    )
};

export default Messenger;