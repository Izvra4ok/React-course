import React from 'react';
import mod from "./MyPost.module.css"
import TextareaPostContainer from "./TextareaFormPost/TextareaFormPostContainer";
import PostContainer from "./Post/PostContainer";


const MyPost = (props) => {

    return (
        <div className={mod.mypost}>
            <TextareaPostContainer />
            <PostContainer/>
        </div>
    );
};

export default MyPost;
