import React from "react";
import "./../css/Header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="#s">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHJ-Qh4ynpRRSaheLuvFvsS_mQxLSbI5Yh0A&usqp=CAU"
          className="header_img"
          alt="logo"
        />
      </a>
    </header>
  );
};
export default Header;
