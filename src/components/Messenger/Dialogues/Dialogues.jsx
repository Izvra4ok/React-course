import React from "react";
import mod from "./Dialogues.module.css";
import Dialog from "./Dialog/Dialog";

const Dialogues = (props) => {
    let dialogsData = [
        {id: 1, name: "Sergey"},
        {id: 2, name: "Alina"},
        {id: 3, name: "Denis"},
        {id: 4, name: "Anna"},
        {id: 5, name: "Vladimir"},
    ];
    const dialogElement = dialogsData
        .map(d => <Dialog id={d.id} name={d.name}/>)
    return (
        <div className={mod.dialogues}>
            {dialogElement}
        </div>
    );
};

export default Dialogues;