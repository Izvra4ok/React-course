import React from "react";
import mod from "./Dialogs.module.css";
import DialogContainer from "./Dialog/DialogContainer";


const Dialogs = (props) => {

    return (
        <div className={mod.dialogs}>
            <DialogContainer />
        </div>
    )
};

export default Dialogs;