import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../../Redux/profilePageReducer";
import TextareaPost from "./TextareaPost";

const TextareaPostContainer = (props) => {

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let updateNewPostText = (text) => {
        // let action = updateNewPostTextActionCreator(text);
        // props.store.dispatch(action);
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <TextareaPost updateNewPostText={updateNewPostText}
                      addPost={addPost}
                      newPostText={props.newPostText}/>
    );
};

export default TextareaPostContainer;
