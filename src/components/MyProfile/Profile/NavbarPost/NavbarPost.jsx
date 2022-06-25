import React from 'react';
import mod from "./NavbarPost.module.css"
import SubNavbar from "./SubNavbar/SubNavbar";

const NavbarPost = (props) => {
    return (
        <div className={mod.navbarpost}>
            <SubNavbar/>
        </div>
    );
};
export default NavbarPost;