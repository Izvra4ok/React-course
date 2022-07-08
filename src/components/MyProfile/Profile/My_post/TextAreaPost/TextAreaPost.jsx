import React from "react";
import mod from "./TextAreaPost.module.css";
import ButtonPost from "../ButtonPost/ButtonPost";

const TextareaPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        // let action = {type: "ADD-POST"};
        // props.dispatch(action);
        props.dispatch({type: "ADD-POST"});

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: "UPDATE-NEW-POST-TEXT", newText: text};
        props.dispatch(action);
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
