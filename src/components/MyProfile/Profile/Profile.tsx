import React from 'react';
import mod from "./Profile.module.css";
import SubNavbar from "./SubNavbar/SubNavbar";
import MyPost from "./My_post/MyPost";
import About from "./About_me/About";
import Preloader from "../../common/Preloader";
import {PostsType, ProfileType} from "../../../types/types";


type PropsType = {
    id: number,
    isAuth: boolean,
    profile: ProfileType,
    status: string,
    posts: Array<PostsType>,
    updateProfile: () => Promise<any>,
    updateStatus: (status: string) => string,
    savePhoto: (photoFile: File) => void,
    onAddPostClick: (textarea: string) => void,
};


const Profile: React.FC<PropsType> = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return <section className={mod.profile}>

        <About profile={props.profile}
               status={props.status}
               id={props.id}
               updateStatus={props.updateStatus}
               savePhoto={props.savePhoto}
               updateProfile={props.updateProfile}/>
        <div className={mod.navbarpost}>
            {props.profile.userId === props.id
                ? <SubNavbar profileId={props.profile.userId}
                             id={props.id}
                             savePhoto={props.savePhoto}/>
                : null}
            <MyPost posts={props.posts}
                    onAddPostClick={props.onAddPostClick}/>
        </div>
    </section>
};


export default Profile;