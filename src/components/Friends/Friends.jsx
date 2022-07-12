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

    let FriendStatePropsMap = props.allfriends.map(fr => <Friend key={fr.toString()} id={fr.id} first={fr.first}
                                                           last={fr.last} age={fr.age} country={fr.country}
                                                           city={fr.city} ava={fr.ava} />);

    let onlineFriendsStatePropsMap = props.online.map(fr => <FriendsOnline id={fr.id} first={fr.first}
                                                             last={fr.last} age={fr.age} country={fr.country}
                                                             city={fr.city} />);
    return (
        <section className={mod.allFriends}>
        <div className={mod.friends}>
            <NavLink to={"online"} className={SelectedLink()}>
                <div className={mod.friends_available}>
                    Online friends
                </div>
            </NavLink>
            <NavLink to={"all"} className={SelectedLink()}>
                <div className={mod.friends_available}>
                    All friends
                </div>
            </NavLink>

        </div>
            <Routes>
                <Route path="online/*"
                       element={onlineFriendsStatePropsMap}>
                </Route>
            </Routes>
            <Routes>
                <Route path="all/*"
                       element={FriendStatePropsMap}>
                </Route>
            </Routes>
        </section>
    );
};

export default Friends;