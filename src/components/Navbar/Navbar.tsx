import React from "react";
import mod from "./Navbar.module.css"
import {NavLink} from "react-router-dom";


export const Navbar: React.FC = React.memo(() => {

    return <nav className={mod.navbar}>
                    <ul className={mod.navbar_list}>
                        <li className={mod.navbar_li}>
                            <NavLink to="/profile/" className={SelectedLink =>  SelectedLink.isActive ? mod.active_link : mod.navbar_link}>
                                My profile
                            </NavLink>
                        </li>
                        <li className={mod.navbar_li}>
                            <NavLink to="/users/" className={SelectedLink =>  SelectedLink.isActive ? mod.active_link : mod.navbar_link}>
                                Find users
                            </NavLink>
                        </li>
                        <li className={mod.navbar_li}>
                            <NavLink to="/messenger/" className={SelectedLink =>  SelectedLink.isActive ? mod.active_link : mod.navbar_link}>
                                Messenger
                            </NavLink>
                        </li>
                        <li className={mod.navbar_li}>
                            <NavLink to="/news/" className={SelectedLink =>  SelectedLink.isActive ? mod.active_link : mod.navbar_link}>
                                News
                            </NavLink>
                        </li>
                        <li className={mod.navbar_li}>
                            <NavLink to="/communities/" className={SelectedLink =>  SelectedLink.isActive ? mod.active_link : mod.navbar_link}>
                                Communities
                            </NavLink>
                        </li>
                        <li className={mod.navbar_li}>
                            <NavLink to="/photos/" className={SelectedLink =>  SelectedLink.isActive ? mod.active_link : mod.navbar_link}>
                                Photos
                            </NavLink>
                        </li>
                        <li className={mod.navbar_li}>
                            <NavLink to="/music/" className={SelectedLink =>  SelectedLink.isActive ? mod.active_link : mod.navbar_link}>
                                Music
                            </NavLink>
                        </li>
                        <li className={mod.navbar_li}>
                            <NavLink to="/videos/" className={SelectedLink =>  SelectedLink.isActive ? mod.active_link : mod.navbar_link}>
                                Videos
                            </NavLink>
                        </li>
                        <li className={mod.navbar_li}>
                            <NavLink to="/apps/" className={SelectedLink =>  SelectedLink.isActive ? mod.active_link : mod.navbar_link}>Apps</NavLink>
                        </li>
                        <li className={mod.navbar_li}>
                            <NavLink to="/bookmarks/" className={SelectedLink =>  SelectedLink.isActive ? mod.active_link : mod.navbar_link}>
                                Bookmarks
                            </NavLink>
                        </li>

                    </ul>
                </nav>
});
