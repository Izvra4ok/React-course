import React from "react";
import mod from "./Friends.module.css";
import {NavLink, Route, Routes} from "react-router-dom";


const Friends = (props) => {

    const SelectedLink = () => {

        return (

            SelectLink => SelectLink.isActive ? mod.active_link : mod.friends_available)
    };

    return (

        <section className={mod.all_friends}>
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
                       element={props.mapStateOnlinefriends}>
                </Route>
            </Routes>
            <Routes>
                <Route path="all/*"
                       element={props.mapStateAllfriends}>
                </Route>
            </Routes>
        </section>
    );
};

export default Friends;