import React from "react";
import mod from "./TextareaMessages.module.css";
import ButtonMessage from "../ButtonMessage/ButtonMessage";


const TextareaMessages = (props) => {

    return (
        <div>
            <form className={mod.form} action="#" method="post" encType="multipart/form-data">
                <textarea className={mod.areatext} name="text" id="textarea"
                          placeholder={"Enter your message"}
                          onChange={props.onMessageChange}
                          value={props.newMessageText} />
                <span>
                    <ButtonMessage onAddMessageClick={props.onAddMessageClick} />
                </span>
            </form>
        </div>
    );
};

export default TextareaMessages;
