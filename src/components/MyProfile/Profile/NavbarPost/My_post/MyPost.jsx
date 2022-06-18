import React from 'react';
import Post from "./Post/Post";
// import Button from "./Button/Button"
import mod from "./MyPost.module.css"
import TextareaButton from "./TextArea/TextArea";

const MyPost = () => {
    return (
        <div className={mod.mypost}>
            <TextareaButton/>
            <Post message={"Hello"} likes={"15"}/>
            <Post message={"Hello"} likes={"15"}/>
            <Post message={"Hello"} likes={"15"}/>
            <Post message={"Hello"} likes={"15"}/>
            <Post message={"Hello"} likes={"15"}/>

            <Post message={"Hi!I'ts my first post"} likes={"30"}/>
        </div>
    );
};

export default MyPost;
