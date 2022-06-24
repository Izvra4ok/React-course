import React from "react";
import mod from "./Messenger.module.css";
import Dialogues from "./Dialogues/Dialogues";
import Messages from "./Messages/Messages";
import Dialog from "./Dialogues/Dialog/Dialog";
import Message from "./Messages/Message/Message";



const Messenger = (props) => {
    const dialogElement = props.dialogues
        .map(d => <Dialog id={d.id} name={d.name}/>)
    const messagesElement = props.messages
        .map(m => <Message message={m.text} id={m.id}/>)
    return (
        <section className={mod.messenger}>
            <Dialogues dialogues={dialogElement}/>
            <Messages messages={messagesElement}/>

        </section>
    );
};

export default Messenger;