import React from 'react';
import mod from "./MyPost.module.css"
import TextareaPost from "./TextAreaPost/TextAreaPost";

const MyPost = (props) => {
    return (
        <div className={mod.mypost}>
            <TextareaPost
                addPost={props.addPost}
                newPostText={props.newPostText}
                updateNewPostText={props.updateNewPostText}/>
            {props.posts}
        </div>
    );
};

export default MyPost;
