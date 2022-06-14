import React from 'react';
import mod from "./Profile.module.css";
import About from "./About_me/About/About";
import MyPost from "./My_post/MyPost";

const Profile = () => {
    return (
        <section className={mod.profile}>
            <About/>
            <MyPost/>
        </section>
    );
};

export default Profile;