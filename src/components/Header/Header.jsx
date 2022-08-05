import React from "react";
import mod from "./Header.module.css";
import logo from "../../assets/images/obrez.png";
import {Link, NavLink} from "react-router-dom";


const Header = (props) => {

    // if (!props.profile) {
    //    return <></>
    // }
    return (
        <header className={mod.header}>
            <div>
                <Link to={"/profile"}>
                    <img
                        src={logo}
                        className={mod.header_logo}
                        alt="header_logo"/>
                </Link>
            </div>

            <div className={mod.auth}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={"/login"}>Login</NavLink>
            }</div>
        </header>
    );
};
export default Header;
