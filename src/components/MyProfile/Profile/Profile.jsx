import React from 'react';
import mod from "./Profile.module.css";
import SubNavbar from "./SubNavbar/SubNavbar";
import MyPost from "./My_post/MyPost";
import AboutContainer from "./About_me/AboutInform/AboutContainer";


const Profile = (props) => {

    return (
        <section className={mod.profile}>
            <AboutContainer/>
            <div className={mod.navbarpost}>
            <SubNavbar />
            <MyPost/>
            </div>
        </section>
    )
};

export default Profile;