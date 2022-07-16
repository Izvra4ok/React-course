import React from 'react';
import mod from "./Post.module.css";
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";


const Post = (props) => {

    let url = "/friends/all/id" + props.first + props.last;

    return (
        <div className={mod.post}>
            <NavLink className={mod.postUser} to={url}>
                {props.first} {props.last}
            </NavLink>
            <div className={mod.post_item}>
                <Link to={url} className={mod.link_avatar}>
                    <img className={mod.image}
                         src="https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg"
                         alt="avatar"/>
                </Link>
                <div className={mod.message}>
                    {props.message}
                </div>
            </div>
            <div className={mod.like}>
                <Link to={"/profile"}>
                    {props.likes} likes
                </Link>
            </div>
        </div>
    )
};

export default Post;
