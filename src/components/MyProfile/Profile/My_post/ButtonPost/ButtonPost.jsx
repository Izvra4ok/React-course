import React from "react";
import mod from "./ButtonPost.module.css";
import {NavLink} from "react-router-dom";

const ButtonPost = (props) => {
    return (
        <span>
            <NavLink to={"send"}>
                <button className={mod.button} onClick={props.addpost}>SEND</button>
            </NavLink>
        </span>
    );
};

export default ButtonPost;

