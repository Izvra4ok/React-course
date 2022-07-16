import React from "react";
import mod from "./OnlineFriends.module.css";
import {NavLink} from "react-router-dom";


const OnlineFriends = (props) => {

    let url = "/friends/online/id" + props.first + props.last;

    return (
        <div>
            <NavLink to={url} className={mod.onlineFriendAva}>
                <img
                    src={"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                    alt="onlineFriend"/>
                <div>{props.first}</div>
                <div>{props.last}</div>
            </NavLink>
        </div>
    );
};

export default OnlineFriends;