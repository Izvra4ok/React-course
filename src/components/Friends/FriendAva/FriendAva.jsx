import React from "react";
import mod from "./FriendAva.module.css";
import {NavLink} from "react-router-dom";
import userDefaultFoto from "../../../assets/images/userDefaultAvatar.webp";


const FriendAva = (props) => {

    let url = "id" + props.first + props.last;

    return (
            <NavLink to={url}>
                <img
                     src={props.avatar !=null
                         ? props.avatar
                         : userDefaultFoto}
                    className={mod.friend_avatar}
                    alt="friend_avatar"/>
            </NavLink>
    );
};

export default FriendAva;
