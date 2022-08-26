import React from "react";
import {Field, Form, Formik} from "formik";
import mod from "./TextareaFormMessages.module.css";


const TextareaFormMessages = (props) => {

    const initialValues = {
        newMessageText: "",
    }

    const addMessage = (newMessageText) => {
        props.onAddMessageClick(newMessageText)
    }

    return (

        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, {resetForm}) => {
                    addMessage(values.newMessageText);
                    resetForm({values: ""})
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
