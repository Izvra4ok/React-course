import React from 'react';
import mod from "./MyPost.module.css"
import TextareaPostContainer from "./TextareaPost/TextareaPostContainer";


const MyPost = (props) => {

    return (
        <div className={mod.mypost}>
            <TextareaPostContainer />
            {props.mapStatePost}
        </div>
    );
};

export default MyPost;
