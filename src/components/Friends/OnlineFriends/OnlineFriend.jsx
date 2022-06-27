import React from "react";
import mod from "./Friend.module.css";
import {NavLink} from "react-router-dom";
import FriendAva from "./FriendAva/FriendAva";


const Friend = (props) => {
        let SelectedLink = () => {
            return (
            SelectedLink => SelectedLink.isActive ? mod.active_link : mod.friend_name
            );
        };
        let url = "/friends/id" + props.id + "=" + props.first + props.last
        return (
        <div className={mod.about_friend}>
            <FriendAva/>
            <div>
                <div className={mod.friend_name}>
                    <NavLink to={url} className={SelectedLink()}>{props.first} {props.last}</NavLink>
                </div>
                <div className={mod.friend_info}>{props.age} years old, from {props.country} {props.city}</div>
                <div className={mod.friend_links}>
                    {props.ava}
                    <span><NavLink to={"/friends/write"} className={mod.friend_link}>Write message</NavLink></span>
                    <span><NavLink to={"/friends/call"} className={mod.friend_link}>Call</NavLink></span>
                </div>
            </div>

        </div>
        );
        };

        export default Friend;
