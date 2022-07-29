import React from "react";
import mod from "./Messenger.module.css";
import Dialogs from "./Dialogues/Dialogs";
import Messages from "./Messages/Messages";


const Messenger = (props) => {

    return (
        <section className={mod.messenger}>
            <Dialogs  />
            <Messages />
        </section>
    )
};

export default Messenger;