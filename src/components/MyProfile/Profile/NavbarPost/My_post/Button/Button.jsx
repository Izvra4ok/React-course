import mod from "./Button.module.css";

const Button = (props) => {
    return (
        <span>
            <a className={mod.button} href="#s">SEND</a>
        </span>
    );
};

export default Button;

