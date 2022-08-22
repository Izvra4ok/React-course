import React from 'react';
import mod from "./Profile.module.css";
import SubNavbar from "./SubNavbar/SubNavbar";
import MyPost from "./My_post/MyPost";
import About from "./About_me/About";


const Profile = (props) => {
    return <section className={mod.profile}>
            <About profile={props.profile}
                   status={props.status}
                   id={props.id}
                   updateStatus={props.updateStatus} />
            <div className={mod.navbarpost}>
                <SubNavbar/>
                <MyPost/>
            </div>
        </section>
};

export default Profile;