import React from "react";
import mod from "./Dialogues.module.css";


const Dialogues = (props) => {

    return (
        <div className={mod.dialogues}>
            {props.dialogStateMap}
        </div>
    );
};

export default Dialogues;