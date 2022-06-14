import React from "react";
import mod from "./Header.module.css";

const Header = () => {
  return (
    <header className={mod.header}>
      <a  href="#s">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHJ-Qh4ynpRRSaheLuvFvsS_mQxLSbI5Yh0A&usqp=CAU"
          className={mod.header_logo}
          alt="header_logo"
        />
      </a>
    </header>
  );
};
export default Header;
