import mod from "./Button.module.css";

const Button = (props) => {
    return (
        <span>
            <a className={mod.button} href="#s">{ props.type }</a>
        </span>
    );
};

export default Button;

