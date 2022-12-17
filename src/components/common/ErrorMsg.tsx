import {ErrorMsgType} from "../../types/types";
import Preloader from "./Preloader";
import React from "react";
import Alert from "@mui/material/Alert/Alert";

export const ErrorMsg = (error: ErrorMsgType) => {
    return (
        <div>
            <Preloader/>
            <Alert variant="filled" severity="error">
                {error.error.message}
            </Alert>
        </div>
    );
};