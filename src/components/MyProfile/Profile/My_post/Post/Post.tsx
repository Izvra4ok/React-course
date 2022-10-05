import React from 'react';
import mod from "./Post.module.css";
import {NavLink} from "react-router-dom";
import userDefaultFoto from "../../../../../assets/images/userDefaultAvatar.webp";
import {PostsType} from "../../../../../types/types";


type PropsType = {
    posts: Array<PostsType>
};


const Post: React.FC<PropsType> = (props) => {

    return (<>
            {
                props.posts.map(p => <span key={p.id}>
        <div className={mod.post}>
            <NavLink className={mod.postUser} to={p.first + p.last}>
                {p.first} {p.last}
            </NavLink>
            <div className={mod.post_item}>
                <NavLink to={p.first + p.last} className={mod.link_avatar}>
                    <img className={mod.image}
                         src={p.avatarUrl != null
                    ? p.avatarUrl
                    : userDefaultFoto}
                         alt="avatar"/>
                </NavLink>
                <div className={mod.message}>
                    {p.message}
                </div>
            </div>
            <div className={mod.like}>
                <NavLink to={"/profile"}>
                    {p.likes} likes
                </NavLink>
            </div>
        </div>
        </span>
            )}
        </>
    )
};

export default Post;
