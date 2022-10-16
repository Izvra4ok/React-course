import React from "react";
import userDefaultFoto from "../../../../assets/images/userDefaultAvatar.webp";
import mod from "./UserAva.module.css";
import {NavLink} from "react-router-dom";


type PropsType = {
    id: number,
    photos: string | null
};


export const UserAva: React.FC<PropsType> = React.memo((props) => {

    return (
        <NavLink to={"/profile/" + props.id}>
            <img className={mod.users_ava} src={props.photos != null
                ? props.photos
                : userDefaultFoto} alt="avatar"/>
        </NavLink>
    )
});

