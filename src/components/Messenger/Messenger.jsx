import React from "react";
import mod from "./Messenger.module.css";
import Dialogues from "./Dialogues/Dialogues";
import Messages from "./Messages/Messages";
import Dialog from "./Dialogues/Dialog/Dialog";
import Message from "./Messages/Message/Message";



const Messenger = (props) => {
    const dialogElement = props.dialogues
        .map(d => <Dialog id={d.id} first={d.first} last={d.last}/>)
    const messagesElement = props.messages
        .map(m => <Message message={m.text} id={m.id}/>);
    return (
        <section className={mod.messenger}>
            <Dialogues dialogues={dialogElement}/>
            <Messages messages={messagesElement} addmessages={props.addmessages}
                      newMessageText={props.newMessageText}
                      updateNewMessageText={props.updateNewMessageText}/>

        </section>
    );
};

export default Messenger;