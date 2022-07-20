import React from "react";
import mod from "./OnlineFriends.module.css";
import {NavLink} from "react-router-dom";


const OnlineFriends = (props) => {

    let url = "/friends/online/id" + props.first + props.last;

    return (
        <div>
            <NavLink to={url} className={mod.onlineFriendAva}>
                <img
                    src={props.avatar}
                    alt="onlineFriend"/>
                <div>{props.first}</div>
                <div>{props.last}</div>
            </NavLink>
        </div>
    );
};

export default OnlineFriends;