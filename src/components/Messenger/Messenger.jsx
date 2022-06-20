import React from "react";
import mod from "./Messenger.module.css";
import Dialogues from "./Dialogues/Dialogues";
import Messages from "./Messages/Messages";


const Messenger = (props) => {
    return (
        <section className={mod.messenger}>
            <Dialogues />
            <Messages/>

        </section>
    );
};

export default Messenger;