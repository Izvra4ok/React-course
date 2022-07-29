import React from "react";
import mod from "./Friend.module.css"
import {NavLink} from "react-router-dom";
import FriendAva from "../FriendAva/FriendAva"


const Friend = (props) => {

    let SelectedLink = () => {
        return SelectedLink => SelectedLink.isActive ? mod.active_link : mod.friend_name
    };

    return (<div>
            {
                props.allfriends.map(fr => <div className={mod.about_friend} key={fr.id}>
                        <div className={mod.friend_avaButton}>
                            <FriendAva avatar={fr.avatarUrl}
                                       first={fr.first}
                                       last={fr.last}/>
                            <NavLink to={"id" + fr.first + fr.last} className={SelectedLink()}>
                                <div>
                                    {fr.followed
                                        ? <button className={mod.button}
                                                  onClick={() => props.unfollowFriends(fr.id)}>UNFOLLOW</button>
                                        : <button className={mod.button}
                                                  onClick={() => props.followFriends(fr.id)}>FOLLOW</button>
                                    }
                                </div>
                            </NavLink>
                        </div>
                        <div>
                            <div className={mod.friend_name}>
                                <NavLink to={"id" + fr.first + fr.last} className={SelectedLink()}>
                                    {fr.first} {fr.last}
                                </NavLink>
                            </div>
                            <div className={mod.friend_info}>
                                {fr.age} years old, from {fr.location.country} {fr.location.city}
                            </div>
                            <div className={mod.friend_links}>
                                {props.ava}
                                <span>
                        <NavLink to={"write" + fr.first + fr.last} className={mod.friend_link}>Write message
                        </NavLink>
                                </span>
                                <span>
                        <NavLink to={"call" + fr.first + fr.last} className={mod.friend_link}>
                            Call
                        </NavLink>
                                </span>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
};

export default Friend;
