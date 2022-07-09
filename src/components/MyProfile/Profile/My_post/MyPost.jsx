import React from 'react';
import mod from "./MyPost.module.css"
import TextareaPost from "./TextAreaPost/TextAreaPost";


const MyPost = (props) => {

    return (
        <div className={mod.mypost}>
            <TextareaPost newPostText={props.newPostText}
                          dispatch={props.dispatch}/>
            {props.posts}
        </div>
    );
};

export default MyPost;
