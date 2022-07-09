import React from 'react';
import mod from "./Profile.module.css";
import About from "./About_me/AboutInform/About";
import SubNavbar from "./SubNavbar/SubNavbar";
import MyPost from "./My_post/MyPost";
import Post from "./My_post/Post/Post";


const Profile = (props) => {

    let aboutMeStatePropsMap = props.aboutme
        .map(info => <About id={info.id} name={info.name} birthday={info.birthday} country={info.country}
                            degree={info.university} web={info.website}/>)

    let postStatePropsMap = props.posts
        .map(p => <Post dispatch={props.dispatch} message={p.message} likes={p.likes} id={p.id} first={p.first} last={p.last}/>);

    return (
        <section className={mod.profile}>
            {aboutMeStatePropsMap}
            <div className={mod.navbarpost}>
            <SubNavbar/>
            <MyPost posts={postStatePropsMap}
                    newPostText={props.newPostText}
                    dispatch={props.dispatch}/>
            </div>
        </section>
    );
};

export default Profile;