import React from 'react';
import mod from "./Profile.module.css";
import SubNavbar from "./SubNavbar/SubNavbar";
import MyPost from "./My_post/MyPost";


const Profile = (props) => {

    return (
        <section className={mod.profile}>
            {props.mapStateAbout}
            <div className={mod.navbarpost}>
            <SubNavbar />
            <MyPost mapStatePost={props.mapStatePost} />
            </div>
        </section>
    )
};

export default Profile;