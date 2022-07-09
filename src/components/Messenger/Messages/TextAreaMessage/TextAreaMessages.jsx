import React from "react";
import mod from "./TextAreaMessages.module.css";
import ButtonMessage from "../ButtonMessage/ButtonMessage";
import {addMessageActionCreator,updateNewMessageTextActionCreator} from "../../../../Redux/state";

const TextAreaMessages = (props) => {


    let onAddMessageClick = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <div>
            <form className={mod.form} action="#" method="post" encType="multipart/form-data">
                <textarea className={mod.areatext} name="text" id="textarea" rows="3"
                          placeholder={"Enter your message"}
                          onChange={onMessageChange}
                          value={props.newMessageText}/>
                <span>
                    <ButtonMessage onAddMessageClick={onAddMessageClick}/>
        </span>
            </form>
        </div>
    );
};

export default TextAreaMessages;
