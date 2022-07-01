import React from "react";
import mod from "./Friends.module.css";
import Friend from "./Friend/Friend";
import {NavLink} from "react-router-dom";


const Friends = (props) => {
    const SelectLink = () => {
        return (
            SelectLink => SelectLink.isActive ? mod.active_link : mod.friends_available)
    };
    const FriendElement = props.allfriends.map(fr => <Friend id={fr.id} first={fr.first}
                                                             last={fr.last} age={fr.age} country={fr.country}
                                                             city={fr.city}/>);
    return (
        <section className={mod.friends}>
            <div className={mod.friends_available}>
                <NavLink className={SelectLink()} to={"/friends/"}>
                    <div>All friends</div>
                </NavLink>
                <NavLink className={SelectLink()} to={"/friends/online/"}>
                    <div>Online friends</div>
                </NavLink>
            </div>
            <NavLink to={"/friends/"}> <div>{FriendElement}</div></NavLink>
            <NavLink to={"/friends/online/"}> </NavLink>
        </section>
    )
}

export default Friends;