import {ErrorMsgType} from "../../types/types";
import Preloader from "./Preloader";
import React from "react";

export const ErrorMsg = (error: ErrorMsgType) => {
    return (
        <div>
            <Preloader/>
            <div> Something went wrong!</div>
            <div> {error.error.message}</div>
        </div>
    );
};