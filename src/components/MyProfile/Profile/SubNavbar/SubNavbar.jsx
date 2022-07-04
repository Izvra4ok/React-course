import React from 'react';
import mod from "./SubNavbar.module.css"
import {NavLink} from "react-router-dom";



const SelectedLink = (props) => {
    return (
        SelectedLink => SelectedLink.isActive ? mod.active_link : mod.subnavbar_link
    );
};
const SubNavbar = () => {
    return (
        <div className={mod.navbar}>
        <nav className={mod.subnavbar}>
            <ul className={mod.subnavbar_list}>
                <li className={mod.subnavbar_li}>
                    <NavLink to="/profile/edit" className={SelectedLink()}>Edit</NavLink>
                </li>
                <li className={mod.subnavbar_li}>
                    <NavLink to="/profile/statistics" className={SelectedLink()}>Statistics</NavLink>
                </li>
                <li className={mod.subnavbar_li}>
                    <NavLink to="/profile/memories" className={SelectedLink()}>Memories</NavLink>
                </li>
                <li className={mod.subnavbar_li}>
                    <NavLink to="/profile/story" className={SelectedLink()}>Story archive</NavLink>
                </li>
            </ul>
        </nav>
        </div>
    );
};
export default SubNavbar;