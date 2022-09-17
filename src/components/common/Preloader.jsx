import React from "react";
import preloader from "../../assets/images/preloader.gif"


const Preloader = (props) => {
    return (
        <div role={'main'}>
            <img src={preloader} style={props.styled} alt="preloader"/>
        </div>
    )
}

export default Preloader;

