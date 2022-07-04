import React from "react";
import mod from "./TextAreaMessages.module.css";
import ButtonMessage from "../ButtonMessage/ButtonMessage";

const TextAreaMessages = (props) => {

    let newMessagesElement = React.createRef();

    let addMessage = () => {
        let text = newMessagesElement.current.value;
        props.addmessages(text);
    };

    let onMessageChange = () => {
        let text = newMessagesElement.current.value;
        props.updateNewMessageText(text)
    }

    return (
        <div>
            <form className={mod.form} action="#" method="post" encType="multipart/form-data">
                <textarea ref={newMessagesElement} onChange={onMessageChange} value={props.newMessageText}
                          className={mod.areatext} name="text" id="textarea" rows="3"/>
                <span>
                    <ButtonMessage addMessage={addMessage}/>
        </span>
            </form>
        </div>
    );
};

export default TextAreaMessages;
