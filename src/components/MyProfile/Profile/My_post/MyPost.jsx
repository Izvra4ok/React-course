import React from 'react';
import mod from "./MyPost.module.css"
import TextareaPostContainer from "./TextareaPost/TextareaPostContainer";


const MyPost = (props) => {

    return (
        <div className={mod.mypost}>
            <TextareaPostContainer newPostText={props.newPostText}
                                   store={props.store} />
            {props.posts}
        </div>
    );
};

export default MyPost;
