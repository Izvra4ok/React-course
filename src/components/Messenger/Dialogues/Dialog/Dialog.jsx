import React from "react";
import mod from "./Dialog.module.css";
import {NavLink} from "react-router-dom";


const Dialog = (props) => {

    let SelectedLink = () => {
        return SelectedLink => SelectedLink.isActive ? mod.active_link : mod.dialog};

    let url = "/messenger/id" + props.first + props.last;

    return (
        <div className={mod.dialogues_items}>
            <div className={mod.dialog}>
                <NavLink to={url} className={SelectedLink()}>
                    <img className={mod.dialogAva}
                         src={props.avatar}
                         alt="avatar"/>
                    {props.first} {props.last}
                </NavLink>
            </div>
        </div>
    );
};

export default Dialog;