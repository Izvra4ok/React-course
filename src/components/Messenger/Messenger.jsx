import React from "react";
import mod from "./Messenger.module.css";
import Dialogs from "./Dialogues/Dialogs";
import Messages from "./Messages/Messages";


const Messenger = (props) => {

    return (
        <section className={mod.messenger}>
            <Dialogs mapStateDialog={props.mapStateDialog} />
            <Messages mapStateMessage={props.mapStateMessage} />
        </section>
    )
};

export default Messenger;