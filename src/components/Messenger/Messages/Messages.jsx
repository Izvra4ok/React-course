import React from "react";
import mod from "./Messages.module.css";
import TextareaButton from "../../MyProfile/Profile/NavbarPost/My_post/TextArea/TextArea";



const Messages = (props) => {
    return (
        <div>
        <div className={mod.messages}>
            <div className={mod.messages_items}>
                {props.messages}
            </div>
        </div>
            <div className={mod.as}> <TextareaButton/></div>
         </div>
    );
};

export default Messages;