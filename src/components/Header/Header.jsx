import React from "react";
import mod from "./Header.module.css";
import logo from "../../assets/images/obrez.png";
import {Link, Navigate,NavLink} from "react-router-dom";


const Header = (props) => {
// if (!props.isAuth){ return <Navigate to={"/login"}/>}
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

            <div>
                {props.isAuth
                    ? <div className={mod.auth}>
                        <NavLink to={"/profile/" + props.id}>
                            <div>Login:{props.login}</div>
                            <div>id:{props.id}</div>
                        </NavLink>
                        <NavLink to={"/login/"} onClick={props.logout}>
                            Exit
                        </NavLink>
                    </div>
                    : <NavLink to={"/login"}>Login</NavLink>
                }</div>
        </header>
    );
};
export default Header;
