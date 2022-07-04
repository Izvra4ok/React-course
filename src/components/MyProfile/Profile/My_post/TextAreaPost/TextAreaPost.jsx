import React from "react";
import mod from "./TextAreaPost.module.css";
import ButtonPost from "../ButtonPost/ButtonPost";

const TextareaPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={mod.post}>
            <form className={mod.form} action="#" method="post" encType="multipart/form-data">
            <textarea ref={newPostElement} onChange={onPostChange} className={mod.areatext} name="text" id="textarea" rows="3"
                      value={props.newPostText}/>
                <ButtonPost addpost={addPost}/>
            </form>
        </div>
    );
};

export default TextareaPost;
