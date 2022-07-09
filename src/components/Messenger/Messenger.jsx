import React from "react";
import mod from "./Messenger.module.css";
import Dialogues from "./Dialogues/Dialogues";
import Messages from "./Messages/Messages";
import Dialog from "./Dialogues/Dialog/Dialog";
import Message from "./Messages/Message/Message";


const Messenger = (props) => {

    const dialogStatePropsMap = props.dialogues
        .map(d => <Dialog id={d.id} first={d.first} last={d.last}/>)

    const messagesStatePropsMap = props.messages
        .map(m => <Message message={m.text} id={m.id}/>);

    return (
        <section className={mod.messenger}>
            <Dialogues dialogues={dialogStatePropsMap}/>
            <Messages messages={messagesStatePropsMap}
                      newMessageText={props.newMessageText}
                      dispatch={props.dispatch}/>
        </section>
    );
};

export default Messenger;