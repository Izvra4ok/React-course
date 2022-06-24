import React from "react";
import mod from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    const SelectedLink = () => {
        return (
            SelectedLink => SelectedLink.isActive ? mod.active_link : mod.dialog
        )
    };
    let url = "/messenger/id" + props.id + "=" + props.name;
    return (
        <div className={mod.dialogues_items}>
            <div className={mod.dialog}>
                <NavLink to={url}
                         className={SelectedLink()}>{props.name}</NavLink>
            </div>
        </div>
    );
};
export default Dialog;