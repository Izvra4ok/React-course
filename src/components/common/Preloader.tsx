import React from "react";
import preloader from "../../assets/images/preloader.gif";


type PropsType = {
};

const Preloader: React.FC<PropsType> = (props) => {
    return (
        <div role={'main'}>
            <img src={preloader} style={{width: "100px", height: "100px"}} alt="preloader"/>
        </div>
    )
};

export default Preloader;

