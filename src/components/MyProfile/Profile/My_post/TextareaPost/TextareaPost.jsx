import React from "react";
import mod from "./TextareaPost.module.css";
import ButtonPost from "../ButtonPost/ButtonPost";

const TextareaPost = (props) => {

    return (

        <div className={mod.post}>
            <form className={mod.form} action="#" method="post" encType="multipart/form-data">
            <textarea className={mod.areatext} name="text" id="textarea"
                      placeholder={"Enter your post"}
                      onChange={props.onPostChange}
                      value={props.newPostText} />

                <ButtonPost onAddPostClick={props.onAddPostClick} />
            </form>
        </div>
    );
};

export default TextareaPost;
