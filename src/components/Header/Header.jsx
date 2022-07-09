import React from "react";
import mod from "./Header.module.css";
import logo from "./obrez.png";
import {Link} from "react-router-dom";


const Header = () => {
  return (
    <header className={mod.header}>
     <Link to={"/profile"}>
        <img
          src={logo}
          className={mod.header_logo}
          alt="header_logo"/>
      </Link>
    </header>
  );
};
export default Header;
