import React from 'react';
import mod from "./MyPost.module.css"
import Post from "./Post/Post";
import TextareaPostForm from "./TextareaFormPost/TextareaFormPost";
import {PostsType} from "../../../../types/types";


type PropsType = {
    posts: Array<PostsType>,
    onAddPostClick: (textarea: string) => void
};


const MyPost: React.FC<PropsType> = (props) => {

    return (
        <div className={mod.mypost}>
            <TextareaPostForm onAddPostClick={props.onAddPostClick}/>
            <Post posts={props.posts}/>
        </div>
    );
};


export default MyPost;
