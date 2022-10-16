import React from "react";
import mod from "./Header.module.css";
import logo from "../../assets/images/obrez.png";
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getIdSelector, getIsAuthSelector, getLoginSelector} from "../../Redux/selectors/authSelectors";
import {getLogoutUser} from "../../Redux/authReducer";
import {AnyAction} from "redux";


export const Header: React.FC = React.memo(() => {

    const dispatch = useDispatch();
    const isAuth = useSelector(getIsAuthSelector);
    const login = useSelector(getLoginSelector);
    const id = useSelector(getIdSelector);

    const logout = () => {
        dispatch(getLogoutUser() as unknown as AnyAction)
    };

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
                {isAuth
                    ? <div className={mod.auth}>
                        <NavLink to={"/profile/" + id}>
                            <div>Login:{login}</div>
                            <div>id:{id}</div>
                        </NavLink>
                        <NavLink to={"/login/"} onClick={logout}>
                            Exit
                        </NavLink>
                    </div>
                    : <NavLink to={"/login"}>Login</NavLink>
                }</div>
        </header>
    );
});
