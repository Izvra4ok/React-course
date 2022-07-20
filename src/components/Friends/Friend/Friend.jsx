import React from "react";
import mod from "./Friend.module.css";
import {NavLink} from "react-router-dom";
import FriendAva from "./FriendAva/FriendAva"



const Friend = (props) => {

    let SelectedLink = () => {

        return (

            SelectedLink => SelectedLink.isActive ? mod.active_link : mod.friend_name
        );
    };

    let url = "id" + props.first + props.last;

    return (

        <div className={mod.about_friend}>
            <FriendAva avatar={props.avatar}
                       first={props.first}
                       last={props.last} />
            <div>
                <div className={mod.friend_name}>
                    <NavLink to={url} className={SelectedLink()}>
                        {props.first} {props.last}
                    </NavLink>
                </div>
                <div className={mod.friend_info}>
                    {props.age} years old, from {props.country} {props.city}
                </div>
                <div className={mod.friend_links}>
                    {props.ava}
                    <span>
                        <NavLink to={"write" + props.first + props.last} className={mod.friend_link}>Write message
                        </NavLink>
                    </span>
                    <span>
                        <NavLink to={"call" + props.first + props.last} className={mod.friend_link}>
                            Call
                        </NavLink>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Friend;
