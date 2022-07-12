import React from "react";
import mod from "./TextareaPost.module.css";
import ButtonPost from "../ButtonPost/ButtonPost";

const TextareaPost = (props) => {

    let onAddPostClick = () => {
        props.addPost();
    };

    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text)
    };

    return (
        <div className={mod.post}>
            <form className={mod.form} action="#" method="post" encType="multipart/form-data">
            <textarea className={mod.areatext} name="text" id="textarea" rows="3"
                      placeholder={"Enter your post"}
                      onChange={onPostChange}
                      value={props.newPostText} />

                <ButtonPost onAddPostClick={onAddPostClick} />
            </form>
        </div>
    );
};

export default TextareaPost;
