import React from 'react';
import mod from "./MyPost.module.css"
import Post from "./Post/Post";
import TextareaPostForm from "./TextareaFormPost/TextareaFormPost";


const MyPost = (props) => {

    return (
        <div className={mod.mypost}>
            <TextareaPostForm onAddPostClick={props.onAddPostClick}/>
            <Post posts={props.posts}/>
        </div>
    );
};

export default MyPost;
