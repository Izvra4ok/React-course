import React from "react";
import mod from "./OnlineFriends.module.css";
import {NavLink} from "react-router-dom";


const OnlineFriends = (props) => {

    return (
        <div>
            {
                props.online.map(on => <span key={on.id}>
                <NavLink to={"friends/online/id" + on.first + on.last} className={mod.onlineFriendAva}>
                    <img src={on.avatarUrl} alt="onlineFriend"/>
                    <div>{on.first}</div>
                    <div>{on.last}</div>
                </NavLink>
            </span>
                )}
        </div>
    );
};

export default OnlineFriends;