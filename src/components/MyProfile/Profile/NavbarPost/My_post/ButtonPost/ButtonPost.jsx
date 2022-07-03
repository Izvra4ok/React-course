import React from "react";
import mod from "./ButtonPost.module.css";
import {NavLink} from "react-router-dom";

const ButtonPost = (props) => {
    return (
        <span>
            <NavLink onClick={props.addpost} to={"send"} className={mod.button}>SEND</NavLink>
        </span>
    );
};

export default ButtonPost;

