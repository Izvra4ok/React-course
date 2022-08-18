import React from "react";
import mod from "./ButtonPost.module.css";
import {NavLink} from "react-router-dom";

const ButtonPost = (props) => {

    return (

        <span>
            <NavLink to={"/profile/send"}>
                <button className={mod.button}
                        onClick={props.onAddPostClick}>
                    SEND
                </button>
            </NavLink>
        </span>
    );
};

export default ButtonPost;

