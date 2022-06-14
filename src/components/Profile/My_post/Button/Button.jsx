import mod from "./Button.module.css";

const Button = (props) => {
    return (
        <div>
            <a className={mod.button} href="#s">{props.type}</a>
        </div>
    );
};

export default Button;

