import React from "react";
import mod from "./TextAreaPost.module.css";
import ButtonPost from "../ButtonPost/ButtonPost";
import {addPostActionCreator,updateNewPostTextActionCreator} from "../../../../../Redux/profilePageReducer";

const TextareaPost = (props) => {

    let onAddPostClick = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div className={mod.post}>
            <form className={mod.form} action="#" method="post" encType="multipart/form-data">
            <textarea className={mod.areatext} name="text" id="textarea" rows="3"
                      placeholder={"Enter your post"}
                      onChange={onPostChange}
                      value={props.newPostText}/>

                <ButtonPost onAddPostClick={onAddPostClick}/>
            </form>
        </div>
    );
};

export default TextareaPost;
