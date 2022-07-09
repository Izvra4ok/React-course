import React from "react";
import mod from "./FriendAva.module.css";
import {NavLink} from "react-router-dom";


const FriendAva = (props) => {

    return (
            <NavLink to={"#"}>
                <img
                     src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    className={mod.friend_avatar}
                    alt="friend_avatar"/>
            </NavLink>
    );
};

export default FriendAva;
