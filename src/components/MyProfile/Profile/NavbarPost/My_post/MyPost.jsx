import React from 'react';
import mod from "./MyPost.module.css"
import TextareaButton from "./TextArea/TextArea";

const MyPost = (props) => {
    return (
        <div className={mod.mypost}>
            <TextareaButton addpost={props.addpost}/>
            {props.posts}
        </div>
    );
};

export default MyPost;
