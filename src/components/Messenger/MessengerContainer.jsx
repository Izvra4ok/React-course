import React from "react";
import Dialog from "./Dialogues/Dialog/Dialog";
import Message from "./Messages/Message/Message";
import Messenger from "./Messenger";
import {connect} from "react-redux";


let mapStateToProps = (state) => {

    return {
        mapStateDialog: state.messengerPage.dialogues
            .map(d => <Dialog key={d.id} first={d.first} last={d.last}/>),

        mapStateMessage: state.messengerPage.messages
            .map(m => <Message key={m.id} message={m.message}/>),
    }
};

const MessengerContainer = connect(mapStateToProps)(Messenger);

export default MessengerContainer;