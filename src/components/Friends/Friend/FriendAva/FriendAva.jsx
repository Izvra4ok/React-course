import React from "react";
import mod from "./FriendAva.module.css";
import {NavLink} from "react-router-dom";


const FriendAva = (props) => {

    let url = "id" + props.first + props.last;

    return (
            <NavLink to={url}>
                <img
                     src={props.avatar}
                    className={mod.friend_avatar}
                    alt="friend_avatar"/>
            </NavLink>
    );
};

export default FriendAva;
