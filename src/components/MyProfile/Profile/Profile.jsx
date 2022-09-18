import React from 'react';
import mod from "./Profile.module.css";
import SubNavbar from "./SubNavbar/SubNavbar";
import MyPost from "./My_post/MyPost";
import About from "./About_me/About";
import Preloader from "../../common/Preloader";


const Profile = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return <section className={mod.profile}>
        <About profile={props.profile}
               status={props.status}
               id={props.id}
               updateStatus={props.updateStatus}
               savePhoto={props.savePhoto}/>
        <div className={mod.navbarpost}>
            <SubNavbar  profileId={props.profile.userId}
                       id={props.id}
                       savePhoto={props.savePhoto}/>
            <MyPost/>
        </div>
    </section>
};


export default Profile;