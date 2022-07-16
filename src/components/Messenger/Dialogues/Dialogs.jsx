import React from "react";
import mod from "./Dialogs.module.css";


const Dialogs = (props) => {

    return (
        <div className={mod.dialogs}>
            {props.mapStateDialog}
        </div>
    )
};

export default Dialogs;