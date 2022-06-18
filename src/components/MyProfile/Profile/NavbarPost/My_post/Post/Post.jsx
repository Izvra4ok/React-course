import React from 'react';
import mod from "./Post.module.css";

const Post = (props) => {
    return (<div className={mod.post}>
        <div className={mod.post_item}>
            <a href="#s" className={mod.link_avatar}> <img className={mod.image} src="https://cdn.maximonline.ru/56/49/1b/56491b82bc0993b183b184b1bc81f2a5/1280x720_0xac120002_6545353461542004417.jpg" alt="avatar"/></a>
            <div className={mod.message}> { props.message }</div>
        </div>
        {/*<div className={mod.like}>{props.likes} likes</div>*/}
        <div className={mod.like}> <a href="#s"> { props.likes } likes</a></div>

    </div>);
};

export default Post;
