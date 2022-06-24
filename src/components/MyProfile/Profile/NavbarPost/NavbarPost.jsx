import React from 'react';
import MyPost from "./My_post/MyPost"
import mod from "./NavbarPost.module.css"
import SubNavbar from "./SubNavbar/SubNavbar";

const NavbarPost = (props) => {
    return (
        <div className={mod.navbarpost}>
            <SubNavbar/>
            <MyPost/>
        </div>
    );
};
export default NavbarPost;