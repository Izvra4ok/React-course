import React from "react";
import {Field, Form, Formik} from "formik";
import mod from "./TextareaFormMessages.module.css";


type PropsType = {
    onAddMessageClick: (newMessageText: string) => void,
};

type TextareaFormMessagesType = {
    newMessageText: string,
}

const TextareaFormMessages: React.FC<PropsType> = (props) => {

    const initialValues: TextareaFormMessagesType = {
        newMessageText: "",
    };

    const addMessage = (newMessageText: string) => {
        props.onAddMessageClick(newMessageText)
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, onSubmitProps) => {
                    addMessage(values.newMessageText);
                    onSubmitProps.resetForm()
                }}>

                <Form>
                    <div className={mod.form}>
                        <label htmlFor="textarea"/>
                        <Field className={mod.areatext}
                               name="newMessageText"
                               id="textarea"
                               placeholder="Enter your post"/>
                        {/*<ErrorMessage name="textarea">*/}
                        {/*    {errorMsg => <div className={mod.formErrors}>{errorMsg}</div>}*/}
                        {/*</ErrorMessage>*/}

                        <button className={mod.button}
                                type="submit">Submit
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
};


export default TextareaFormMessages;
