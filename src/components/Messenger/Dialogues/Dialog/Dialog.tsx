import React from "react";
import mod from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import userDefaultFoto from "../../../../assets/images/userDefaultAvatar.webp"
import {InStateDialogsType} from "../../../../types/types";


type PropsType = {
    dialogs: Array<InStateDialogsType>
};


const Dialog: React.FC<PropsType> = (props) => {

    return (
        <div className={mod.dialogues_items}>
            {
                props.dialogs.map(dialog => <span key={dialog.id}>
            <div className={mod.dialog}>
                <NavLink to={"/messenger/id" + dialog.first + dialog.last} className={SelectedLink => SelectedLink.isActive ? mod.active_link : mod.dialog}>
                    <img className={mod.dialogAva}
                         src={dialog.avatarUrl != null
                             ? dialog.avatarUrl
                             : userDefaultFoto}
                         alt="avatarUser"/>
                    {dialog.first} {dialog.last}
                </NavLink>
            </div>
            </span>
                )}
        </div>
    );
};


export default Dialog;