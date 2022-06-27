import mod from "./Button.module.css";
import {NavLink} from "react-router-dom";

const Button = (props) => {
    return (
        <span>
            <NavLink to={"send"} className={mod.button}>SEND</NavLink>
        </span>
    );
};

export default Button;

