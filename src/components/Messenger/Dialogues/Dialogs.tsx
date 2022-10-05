import React from "react";
import mod from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import {InStateDialogsType} from "../../../types/types";


type PropsType = {
    dialogs: Array<InStateDialogsType>
};


const Dialogs: React.FC<PropsType> = (props) => {

    return (
        <div className={mod.dialogs}>
            <Dialog dialogs={props.dialogs}/>
        </div>
    )
};


export default Dialogs;