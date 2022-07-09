import React from "react";
import mod from "./ButtonMessage.module.css";
import {NavLink} from "react-router-dom";


const ButtonMessage = (props) => {

    return (
        <span>
            <NavLink to={"send"}>
                <button className={mod.button}
                        onClick={props.onAddMessageClick}>
                    SEND
                </button>
            </NavLink>
        </span>
    );
};

export default ButtonMessage;

