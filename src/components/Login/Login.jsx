import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import mod from "./Login.module.css";
import * as Yup from "yup";


const validationSchema = Yup.object().shape({
    email: Yup.string()
        .min(2, "Must be longer than 2 characters")
        .required("Required email"),
    password: Yup.string()
        .min(8, "Must be longer than 8 characters")
        .required("Required password"),
    comments: Yup.string()
        .max(500, "So easy"),
});


const Login = (props) => {

    const initialValues = {
        email: "",
        password: "",
        rememberMe: false,
        captcha: true,
    };

    const loginUser = (values) => {
        props.loginUser(values.email, values.password, values.rememberMe,values.captcha)
    };


    return <div>

        <h2>Login</h2>

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={loginUser}>

            <Form>
                <div>
                    <label className={mod.formName}
                           htmlFor="email">Email</label>
                    <Field className={mod.form} type="text"
                           placeholder="Enter your email"
                           id="email"
                           name="email"/>
                    <ErrorMessage name="email">
                        {errorMsg => <div className={mod.formErrors}>{errorMsg}</div>}
                    </ErrorMessage>
                </div>

                <div>
                    <label className={mod.formName}
                           htmlFor="password">Password</label>
                    <Field className={mod.form}
                           placeholder="Enter your password"
                           type="text"
                           id="password"
                           name="password"/>
                    <ErrorMessage name="password">
                        {errorMsg => <div className={mod.formErrors}>{errorMsg}</div>}
                    </ErrorMessage>
                </div>

                <label className={mod.formName}
                       htmlFor="rememberMe">Remember me</label>
                <Field className={mod.formCheckbox}
                       type="checkbox"
                       id="rememberMe"
                       name="rememberMe"/>

                <button className={mod.button}
                        type="submit">Submit
                </button>
            </Form>
        </Formik>
    </div>
}

export default Login;
