import React from "react";
import userDefaultFoto from "../../../../assets/images/userDefaultAvatar.webp";
import mod from "./UserAva.module.css";
import {NavLink} from "react-router-dom";


const UserAva = (props) => {

    return (
        <NavLink to={"/profile/" + props.id}>
            <img className={mod.users_ava} src={props.photos != null
                ? props.photos
                : userDefaultFoto} alt="avatar"/>
        </NavLink>
    )
}


export default UserAva;