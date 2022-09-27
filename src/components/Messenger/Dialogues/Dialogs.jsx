import React from "react";
import mod from "./Dialogs.module.css";
import DialogContainer from "./Dialog/DialogContainer";
import Dialog from "./Dialog/Dialog";


const Dialogs = (props) => {

    return (
        <div className={mod.dialogs}>
            <Dialog dialogs={props.dialogs}/>
        </div>
    )
};

export default Dialogs;