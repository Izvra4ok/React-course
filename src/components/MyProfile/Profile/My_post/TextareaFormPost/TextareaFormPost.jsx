import React from "react";
import mod from "./TextareaFormPost.module.css";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    textarea: Yup.string()
        .min(1, "Must be longer than 1 characters")
        .required("Required addPost"),
});


const TextareaPostForm = (props) => {

    const initialValues = {
        textarea: "",
    };

    const addPost = (textarea) => {
        props.onAddPostClick(textarea);
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values,{resetForm}) => {
                    addPost(values.textarea);
                    resetForm({values: ""})
                }}>
                <Form>
                    <div  className={mod.form}>
                        <label htmlFor="textarea"/>
                        <Field className={mod.areatext}
                               name="textarea"
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


export default TextareaPostForm;