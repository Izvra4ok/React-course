import React from "react";
import mod from "./Button.module.css";
import {NavLink} from "react-router-dom";

const Button = (props) => {
    return (
        <span>
            <NavLink onClick={props.addpost} to={"#"} className={mod.button}>SEND</NavLink>
        </span>
    );
};

export default Button;

