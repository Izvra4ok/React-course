import React from "react";
import mod from "./Dialogues.module.css";
import Dialog from "./Dialog/Dialog";

const Dialogues = () => {
    return (
        <div className={mod.dialogues}>
            <Dialog name={"Sergey"} id={1}/>
            <Dialog name={"Alina"} id={2}/>
            <Dialog name={"Denis"} id={3}/>
            <Dialog name={"Anna"} id={4}/>
            <Dialog name={"Vladimir"} id={5}/>
        </div>

    );
};

export default Dialogues;