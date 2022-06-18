import mod from "./TextArea.module.css";
import Button from "./../Button/Button";

const TextareaButton = () => {
  return (
      <div className={mod.post}>
          <form className={mod.post1} action="#" method="post"  encType="multipart/form-data">
            <textarea className={mod.areatext} name="text" id="textarea"    rows="3" placeholder="Введите что-нибудь">
            </textarea>
              <Button type={"SEND"}/>
          </form>
        </div>
  );
};

export default TextareaButton;
