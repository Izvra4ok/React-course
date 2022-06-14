import mod from "./TextArea.module.css";

const TextArea = () => {
  return (
      <div className={mod.post}>
          <form action="#" method="post"  encType="multipart/form-data">
            <textarea className={mod.areatext} name="text" id="textarea"   rows="3" placeholder="Введите что-нибудь">
            </textarea>
          </form>
        </div>
  );
};

export default TextArea;
