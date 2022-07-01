import React from "react";
import mod from "./TextArea.module.css";
import Button from "./../Button/Button";

const TextareaButton = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addpost(text);
        newPostElement.current.value = "";
    };
  return (
      <div className={mod.post}>
          <form className={mod.form} action="#" method="post"  encType="multipart/form-data">
            <textarea ref={newPostElement} className={mod.areatext} name="text" id="textarea"    rows="3" placeholder="Write...">
            </textarea>
            <Button addpost={addPost}/>
          </form>
        </div>
  );
};

export default TextareaButton;
