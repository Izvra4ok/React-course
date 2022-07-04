import React from 'react';
import mod from "./Profile.module.css";
import About from "./About_me/AboutInform/About";
import SubNavbar from "./SubNavbar/SubNavbar";
import MyPost from "./My_post/MyPost";
import Post from "./My_post/Post/Post";

const Profile = (props) => {
    let AboutMeElement = props.about
        .map(info => <About id={info.id} name={info.name} birthday={info.birthday} country={info.country}
                            degree={info.university} web={info.website}/>)
    const postElement = props.posts
        .map(p => <Post message={p.message} likes={p.likes} id={p.id} first={p.first} last={p.last}/>);
    return (
        <section className={mod.profile}>
            {AboutMeElement}
            <div className={mod.navbarpost}>
            <SubNavbar/>
            <MyPost
                posts={postElement}
                addPost={props.addPost}
                newPostText={props.newPostText}
                updateNewPostText={props.updateNewPostText}/>
            </div>
        </section>
    );
};

export default Profile;