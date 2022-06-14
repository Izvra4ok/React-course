import React from 'react';
import TextArea from "./TextArea/TextArea";
import Post from "./Post/Post";
import Button from "./Button/Button";
import mod from "./MyPost.module.css"

const MyPost = () => {
    return (
        <div className={mod.mypost}>
            <TextArea/>
            <Button type={"SEND"}/>
            <Post message={"Hello"} likes={"15"}/>
            <Post message={"Hi!I'ts my first post"} likes={"30"}/>
        </div>
    );
};

export default MyPost;
