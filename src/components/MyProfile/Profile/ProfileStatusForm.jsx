// import React, {useEffect, useState} from "react";
// import mod from "./Profile.module.css";
// import {ErrorMessage, Field, Form, Formik} from "formik";
// import * as Yup from "yup";
//
//
// const validationSchema = Yup.object().shape({
//     status: Yup.string()
//         .max(100, "Max symbols 100")
// });
//
//
// const ProfilestatusForm = (props) => {
//
//     const [status, setStatus] = useState(props.status);
//
//     const [editMode, setEditMode] = useState(false);
//
//     useEffect(()=>{
//         setStatus(props.status)
//     },[props.status])
//
//     let initialValues = {
//         status: status || ""
//     }
//
//     let activateEditMode = () => {
//         setEditMode(true);
//     }
//
//     let deActivateEditMode = (values,onSubmitProps) => {
//         props.updateStatus(values.status)
//         setEditMode(false);
//         // onSubmitProps.setSubmitting(false);
//         // onSubmitProps.resetForm();;
//     }
//
//     let onStatusChange = (e) => {
//         setStatus(e.currentTarget.value);
//     }
//
//     return (
//         !editMode
//             ? <div>
//                         <span onClick={activateEditMode}>
//                             {props.status || "Enter your status"}
//                         </span>
//             </div>
//             : <div>
//                 <Formik
//                     initialValues={initialValues}
//                     validationSchema={validationSchema}
//                     onSubmit={deActivateEditMode}
//                     validateOnMount>
//
//                     <Form onChange={onStatusChange}>
//                         <div>
//                             <label htmlFor="status"/>
//                             <Field className={mod.form} type="text"
//                                    placeholder="Enter your status"
//                                    id="status"
//                                    name="status"
//                                    disabled={Formik.isSubmitting}/>
//                             <ErrorMessage name="status">
//                                 {errorMsg => <div className={mod.formErrors}>{errorMsg}</div>}
//                             </ErrorMessage>
//                         </div>
//                     </Form>
//
//                 </Formik>
//
//             </div>
//
//     )
// }
//
//
// export default ProfilestatusForm;