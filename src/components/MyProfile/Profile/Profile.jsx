import React from 'react';
import mod from "./Profile.module.css";
import SubNavbar from "./SubNavbar/SubNavbar";
import MyPost from "./My_post/MyPost";



const Profile = (props) => {

    return (

        <section className={mod.profile}>
            {props.aboutmeStateMap}
            <div className={mod.navbarpost}>
            <SubNavbar />
            <MyPost postStateMap={props.postStateMap}
                    newPostText={props.newPostText}/>
            </div>
        </section>
    );
};

export default Profile;