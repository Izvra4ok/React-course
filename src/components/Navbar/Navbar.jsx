import React from "react";
import mod from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import OnlineFriends from "./OnlineNavbarFriends/OnlineFriends";



const Navbar = (props) => {
    const SelectedLink = () => {
        return (
            SelectedLink => SelectedLink.isActive ? mod.active_link : mod.navbar_link
        );
  };
        const onlineFriendsElement = props.online.map( on => <OnlineFriends id={on.id} first={on.first} last={on.last}/>);
    return (
        <nav className={mod.navbar}>
            <ul className={mod.navbar_list}>
                <li className={mod.navbar_li}>
                    <NavLink to="/profile/" className={SelectedLink()}>My profile</NavLink>
                </li>
                <li className={mod.navbar_li}>
                    <NavLink to="/friends/" className={SelectedLink()}>Friends</NavLink>
                </li>
                <li className={mod.navbar_li}>
                    <NavLink to="/messenger/" className={SelectedLink()}>Messenger</NavLink>
                </li>
                <li className={mod.navbar_li}>
                    <NavLink to="/news/" className={SelectedLink()}>News</NavLink>
                </li>
                <li className={mod.navbar_li}>
                    <NavLink to="/communities/" className={SelectedLink()}>Communities</NavLink>
                </li>
                <li className={mod.navbar_li}>
                    <NavLink to="/photos/" className={SelectedLink()}>Photos</NavLink>
                </li>
                <li className={mod.navbar_li}>
                    <NavLink to="/music/" className={SelectedLink()}>Music</NavLink>
                </li>
                <li className={mod.navbar_li}>
                    <NavLink to="/videos/" className={SelectedLink()}>Videos</NavLink>
                </li>
                <li className={mod.navbar_li}>
                    <NavLink to="/apps/" className={SelectedLink()}>Apps</NavLink>
                </li>
                <li className={mod.navbar_li}>
                    <NavLink to="/bookmarks/" className={SelectedLink()}>Bookmarks</NavLink>
                </li>
                <li className={mod.navbar_li}>
                    <NavLink to="/files/" className={SelectedLink()}>Files</NavLink>
                </li>
                <li className={mod.navbar_li}>
                    <NavLink to="/friends/online/" className={mod.navbar_link}>Friends online</NavLink>
                </li>

            </ul>
            <ul className={mod.onlineFriend}>
                {onlineFriendsElement}

            </ul>
        </nav>

    );
};
export default Navbar;