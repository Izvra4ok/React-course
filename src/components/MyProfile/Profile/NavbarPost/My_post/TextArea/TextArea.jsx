import mod from "./TextArea.module.css";
import Button from "./../Button/Button";

const TextareaButton = () => {
  return (
      <div className={mod.post}>
          <form className={mod.form} action="#" method="post"  encType="multipart/form-data">
            <textarea className={mod.areatext} name="text" id="textarea"    rows="3" placeholder="Write...">
            </textarea>
              <Button />
          </form>
        </div>
  );
};

export default TextareaButton;
