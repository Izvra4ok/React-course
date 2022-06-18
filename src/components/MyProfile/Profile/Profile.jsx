import React from 'react';
import mod from "./Profile.module.css";
import About from "./About_me/About/About";
import NavbarPost from "./NavbarPost/NavbarPost"

const Profile = () => {
    return (
        <section className={mod.profile}>
            <About/>
            <NavbarPost/>
        </section>
    );
};

export default Profile;