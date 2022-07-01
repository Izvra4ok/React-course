import React from "react";
import mod from "./OnlineFriends.module.css";
import {NavLink} from "react-router-dom";


const OnlineFriends = (props) => {
    let url = "/friends/id" + props.first + props.last;
    return (
        <div>
            <NavLink to={url} className={mod.onlineFriend_Ava}>
                <img
                    src={"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                    alt="onlineFriend"/>
                <span>{props.first}</span>
                <span>{props.last}</span>
            </NavLink>
        </div>
    );
};
export default OnlineFriends;