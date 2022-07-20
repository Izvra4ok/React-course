import React from 'react';
import About from "./About_me/AboutInform/About";
import Post from "./My_post/Post/Post";
import Profile from "./Profile";
import {connect} from "react-redux";


let mapStateToProps = (state) => {

    return {
        mapStateAbout: state.profilePage.aboutme.map(info => <About key={info.id} avatar={info.avatarUrl} name={info.name}
                                                                    birthday={info.birthday} country={info.country}
                                                                  degree={info.university} web={info.website}/>),

        mapStatePost: state.profilePage.posts.map(p => <Post key={p.id} avatar={p.avatarUrl} message={p.message} likes={p.likes}
                                                             first={p.first} last={p.last}/>),

    }
};

const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;