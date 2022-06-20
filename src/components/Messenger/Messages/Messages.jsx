import React from "react";
import mod from "./Messages.module.css";
import Message from "./Message/Message";


const Messages = (props) => {
    let messagesData = [
        {id: 1, text: "Hi"},
        {id: 2, text: "Hello"},
        {id: 3, text: "Good bye"},
        {id: 4, text: "How are you?"},
    ];
    const messagesElement = messagesData
        .map(m => <Message message={m.text} id={m.id}/>)
    return (
        <div className={mod.messages}>
            <div className={mod.messages_items}>
                {messagesElement}
                {/*<Message message={messagesData[0].text} id={messagesData[0].id}/>*/}
                {/*<Message message={messagesData[1].text} id={messagesData[1].id}/>*/}
                {/*<Message message={messagesData[2].text} id={messagesData[2].id}/>*/}
                {/*<Message message={messagesData[3].text} id={messagesData[3].id}/>*/}
            </div>

        </div>
    );
};

export default Messages;