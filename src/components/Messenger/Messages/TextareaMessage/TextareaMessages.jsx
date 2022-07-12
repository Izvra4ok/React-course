import React from "react";
import mod from "./TextareaMessages.module.css";
import ButtonMessage from "../ButtonMessage/ButtonMessage";

const TextareaMessages = (props) => {


    let onAddMessageClick = () => {
        props.addMessage();
    };

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text)
    }

    return (
        <div>
            <form className={mod.form} action="#" method="post" encType="multipart/form-data">
                <textarea className={mod.areatext} name="text" id="textarea" rows="3"
                          placeholder={"Enter your message"}
                          onChange={onMessageChange}
                          value={props.newMessageText} />
                <span>
                    <ButtonMessage onAddMessageClick={onAddMessageClick} />
        </span>
            </form>
        </div>
    );
};

export default TextareaMessages;
