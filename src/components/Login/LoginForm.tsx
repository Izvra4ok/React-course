import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import mod from "./Login.module.css";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {
    getCaptchaUrlSelector,
    getIsAuthSelector
} from "../../Redux/selectors/authSelectors";
import {getLoginUser} from "../../Redux/authReducer";
import {AnyAction} from "redux";
import {Navigate} from "react-router-dom";


type FormikPropsType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
};

const validationSchema = Yup.object().shape({
    email: Yup.string().email()
        .min(2, "Must be longer than 2 characters")
        .required("Required email"),
    password: Yup.string()
        .min(1, "Must be longer than 1 characters")
        .required("Required password"),
});

export const LoginForm: React.FC = () => {

    const dispatch =useDispatch();
    const isAuth = useSelector(getIsAuthSelector);
    const captcha = useSelector(getCaptchaUrlSelector);

    if (isAuth) {
        return <Navigate to={"/profile/"}/>
    }

    const initialValues: FormikPropsType = {
        email: "",
        password: "",
        rememberMe: false,
        captcha: "",
    };

    const loginUser = (values: FormikPropsType, onSubmitProps: any) => {
        dispatch(getLoginUser(values.email, values.password, values.rememberMe, values.captcha, onSubmitProps.setStatus,) as unknown as AnyAction)
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
    };

    return <div>

        <h2>Login</h2>

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={loginUser}
            validateOnMount
        >

            {Formik => {
            return (
            <Form>

                {captcha
                    ? <div>
                        <div>
                            <img src={captcha} alt={"captchaUrl"} />
                        </div>
                        <div>
                            <label className={mod.formName}
                                   htmlFor="captcha">captchaUrl</label>
                            <Field className={mod.form} type="text"
                                   placeholder="Enter your captcha code"
                                   id="captcha"
                                   name="captcha"/>
                        </div>
                    </div>
                    : null
                }

                <div className={mod.formErrors}>{Formik.status}</div>

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
                           type="password"
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
                        disabled={!Formik.isValid || Formik.isSubmitting}
                        type="submit">Submit
                </button>

            </Form>
                )}}
        </Formik>
    </div>
};


