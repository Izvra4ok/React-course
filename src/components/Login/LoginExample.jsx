// import React from "react";
// import {ErrorMessage, Field, Form, Formik} from "formik";
// import mod from "./Login.module.css";
// import * as Yup from "yup";
//
//
// const validationSchema = Yup.object().shape({
//     email: Yup.string()
//         .min(2, "Must be longer than 2 characters")
//         .required("Required email"),
//     password: Yup.string()
//         .min(8, "Must be longer than 8 characters")
//         .required("Required password"),
//     comments: Yup.string()
//         .max(500, "So easy"),
// });
//
//
// const LoginExample = (props) => {
//
//     const initialValues = {
//         email: "",
//         password: "",
//         rememberMe: false,
//         comments: "",
//         address: "",
//     };
//
//     const onSubmit = (values) => {
//         console.log("Form data", values)
//     };
//
//
//     return <div>
//
//         <h2>Login</h2>
//
//         <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={onSubmit}>
//
//             <Form>
//                 <div>
//                     <label className={mod.formName}
//                            htmlFor="email">Email</label>
//                     <Field className={mod.form} type="text"
//                            placeholder="Enter your email"
//                            id="email"
//                            name="email"/>
//                     <ErrorMessage name="email">
//                         {errorMsg => <div className={mod.formErrors}>{errorMsg}</div>}
//                     </ErrorMessage>
//                 </div>
//
//                 <div>
//                     <label className={mod.formName}
//                            htmlFor="password">Password</label>
//                     <Field className={mod.form}
//                            placeholder="Enter your password"
//                            type="text"
//                            id="password"
//                            name="password"/>
//                     <ErrorMessage name="password">
//                         {errorMsg => <div className={mod.formErrors}>{errorMsg}</div>}
//                     </ErrorMessage>
//                 </div>
//
//                 {/*<div>*/}
//                 {/*    <label htmlFor="comments">Comments</label>*/}
//                 {/*    <Field as="textarea"*/}
//                 {/*           className={mod.formComments}*/}
//                 {/*           id="comments"*/}
//                 {/*           name="comments"/>*/}
//                 {/*    <ErrorMessage name="comments"/>*/}
//                 {/*</div>*/}
//
//                 {/*<div>*/}
//                 {/*    <label htmlFor="address">Address</label>*/}
//                 {/*    <Field*/}
//                 {/*        name="address">*/}
//                 {/*        {*/}
//                 {/*            (props) => {*/}
//                 {/*                const {field, form, meta} = props*/}
//                 {/*                console.log("Render props", props)*/}
//                 {/*                return (*/}
//                 {/*                    <div>*/}
//                 {/*                        <input className={mod.form}*/}
//                 {/*                               type="text"*/}
//                 {/*                               id="address" {...field} />*/}
//                 {/*                        {meta.touched && meta.error*/}
//                 {/*                            ? <div>{meta.error}</div>*/}
//                 {/*                            : null}*/}
//                 {/*                    </div>*/}
//                 {/*                )*/}
//                 {/*            }*/}
//                 {/*        }*/}
//                 {/*    </Field>*/}
//                 {/*</div>*/}
//
//                 <label className={mod.formName}
//                        htmlFor="rememberMe">Remember me</label>
//                 <Field className={mod.formCheckbox}
//                        type="checkbox"
//                        id="rememberMe"
//                        name="rememberMe"/>
//
//                 <button className={mod.button}
//                         type="submit">Submit
//                 </button>
//
//             </Form>
//         </Formik>
//     </div>
// }
//
// export default LoginExample;
