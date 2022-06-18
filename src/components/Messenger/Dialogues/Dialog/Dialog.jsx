import React from "react";
import mod from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const SelectedLink = () => {
    return (
        SelectedLink => SelectedLink.isActive ? mod.active_link : mod.dialog
    )
};



const Dialog = (props) => {
    let path = "/messenger/" + props.id;
    return (
        <div className={mod.dialogues_items}>
            <div className={mod.dialog}>
                <NavLink to={path}
                         className={SelectedLink()}>{props.name}</NavLink>
            </div>
        </div>
    );
};
export default Dialog;