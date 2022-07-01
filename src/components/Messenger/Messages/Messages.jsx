import React from "react";
import mod from "./Messages.module.css";
import {NavLink} from "react-router-dom";


const Messages = (props) => {
    let newMessagesElement = React.createRef();
    let addMessages = () => {
        let text = newMessagesElement.current.value;
        props.addmessages(text);
    };
    return (
        <div>
            <div className={mod.messages}>
                <div className={mod.messages_items}>
                    {props.messages}
                </div>
            </div>
            <form className={mod.form} action="#" method="post"  encType="multipart/form-data">
            <textarea ref={newMessagesElement} className={mod.areatext} name="text" id="textarea"    rows="3" placeholder="Write...">
            </textarea>
                <span>
            <NavLink onClick={addMessages} to={"send"} className={mod.button}>SEND</NavLink>
        </span>
            </form>
        </div>
);
};

export default Messages;