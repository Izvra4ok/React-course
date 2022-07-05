import React from "react";
import mod from "./Friends.module.css";
import Friend from "./Friend/Friend";
import {NavLink, Route, Routes} from "react-router-dom";
import FriendsOnline from "./OnlineFriends/FriendsOnline";



const Friends = (props) => {
    const SelectedLink = () => {
        return (
            SelectLink => SelectLink.isActive ? mod.active_link : mod.friends_available)
    };
    let FriendElement = props.allfriends.map(fr => <Friend id={fr.id} first={fr.first}
                                                           last={fr.last} age={fr.age} country={fr.country}
                                                           city={fr.city}/>);
    let onlineFriendElement = props.online.map(fr => <FriendsOnline id={fr.id} first={fr.first}
                                                             last={fr.last} age={fr.age} country={fr.country}
                                                             city={fr.city}/>);
    return (
        <div>
        <section className={mod.friends}>
            <NavLink to={"online"} className={SelectedLink()}>
                <div className={mod.friends_available}>Online friends</div></NavLink>
            <NavLink to={"all"} className={SelectedLink()}>
                <div className={mod.friends_available}>All friends</div></NavLink>
        </section>
            <Routes>
                <Route path="online/*"
                       element={onlineFriendElement}>
                </Route>
                <Route path="*"
                       element={FriendElement}>
                </Route>

            </Routes>


        </div>
    );
}
export default Friends;