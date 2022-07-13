import React from "react";
import mod from "./Navbar.module.css"
import {NavLink} from "react-router-dom";


const Navbar = (props) => {

    let SelectedLink = () => {

        return (

            SelectedLink => SelectedLink.isActive ? mod.active_link : mod.navbar_link
        );
  };

    return (

        <nav className={mod.navbar}>
            <ul className={mod.navbar_list}>
                <li className={mod.navbar_li}>
                    <NavLink to="/profile/" className={SelectedLink()}>
                        My profile
                    </NavLink>
                </li>
                <li className={mod.navbar_li}>
                    <NavLink to="/friends/all" className={SelectedLink()}>
                        Friends
                    </NavLink>
                </li>
                <li className={mod.navbar_li}>
                    <NavLink to="/messenger/" className={SelectedLink()}>
                        Messenger
                    </NavLink>
                </li>
                <li className={mod.navbar_li}>
                    <NavLink to="/news/" className={SelectedLink()}>
                        News
                    </NavLink>
                </li>
                <li className={mod.navbar_li}>
                    <NavLink to="/communities/" className={SelectedLink()}>
                        Communities
                    </NavLink>
                </li>
                <li className={mod.navbar_li}>
                    <NavLink to="/photos/" className={SelectedLink()}>
                        Photos
                    </NavLink>
                </li>
                <li className={mod.navbar_li}>
                    <NavLink to="/music/" className={SelectedLink()}>
                        Music
                    </NavLink>
                </li>
                <li className={mod.navbar_li}>
                    <NavLink to="/videos/" className={SelectedLink()}>
                        Videos
                    </NavLink>
                </li>
                <li className={mod.navbar_li}>
                    <NavLink to="/apps/" className={SelectedLink()}>Apps</NavLink>
                </li>
                <li className={mod.navbar_li}>
                    <NavLink to="/bookmarks/" className={SelectedLink()}>
                        Bookmarks
                    </NavLink>
                </li>
                <li className={mod.navbar_li}>
                    <NavLink to="/files/" className={SelectedLink()}>
                        Files
                    </NavLink>
                </li>
                <li className={mod.navbar_li}>
                    <NavLink to="/friends/online" className={SelectedLink()}>
                        Friends online
                    </NavLink>
                </li>

            </ul>
            <ul className={mod.onlineFriend}>
                {props.onlineFriendsStateMap}
            </ul>
        </nav>
    );
};

export default Navbar;