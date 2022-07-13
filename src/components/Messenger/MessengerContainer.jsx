import React from "react";
import Dialog from "./Dialogues/Dialog/Dialog";
import Message from "./Messages/Message/Message";
import StoreContext from "../../storeContext";
import Messenger from "./Messenger";


const MessengerContainer = () => {

    return <StoreContext.Consumer>

        {(store) => {

            let state = store.getState().messengerPage;

            let dialogStateMap = state.dialogues
                .map(d => <Dialog id={d.id} first={d.first} last={d.last}/>)

            let messagesStateMap = state.messages
                .map(m => <Message message={m.text} id={m.id}/>);

            return <Messenger messagesStateMap={messagesStateMap}
                              dialogStateMap={dialogStateMap}
                              newMessageText={state.newMessageText}/>
        }}
    </StoreContext.Consumer>
};

export default MessengerContainer;