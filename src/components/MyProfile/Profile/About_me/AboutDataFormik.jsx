import React from "react";
import {ErrorMessage, Field, FieldArray, Form, Formik} from "formik";
import mod from "./AboutFormik.module.css";
import * as Yup from "yup";


let contactsJsx = (name) => {
    return (
        <div key={name} className={mod.about_info}>
            <span>
              {name}:
            </span>
            <span className={mod.about_span}>
                <Field className={mod.about_span}
                       name={`contacts.${name}`}
                       type={'text'}
                       id={name}
                       placeholder={name}/>
            </span>
        </div>)
}


const validationSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(3, "Must be longer than 3 characters")
        .max(25, "Must be shorter than 25 characters !"),
    aboutMe: Yup.string()
        .max(50, "Must be shorter than 50 characters !"),
    lookingForAJobDescription: Yup.string()
        .max(50, "Must be shorter than 50 characters !"),
});


const AboutDataFormik = (props) => {

    let {profile, handleSubmit, goToViewMode} = props;

    let objectFromApiCopy = JSON.parse(JSON.stringify(profile));

    const arrayWithNames = Object.keys(profile.contacts);
    arrayWithNames.forEach((item) => {
        let value = objectFromApiCopy.contacts[item]
        if (!!value === null) {
            objectFromApiCopy.contacts[item] = ""
        }
    });

    return <Formik
        initialValues={props.initialValues}

        validationSchema={validationSchema}

        onSubmit={(values, bagWithMethods) => {
            let {setStatus, setSubmitting} = bagWithMethods
            handleSubmit(values, setStatus, setSubmitting, goToViewMode)
            bagWithMethods.setSubmitting(false)
        }}

        validateOnMount>

        {Formik => {
            return (
                <Form className={mod.formik}>
                    <div className={mod.statusErrors}>{Formik.status}</div>
                    <div className={mod.about_info}>
                        <label
                            htmlFor="fullName">Name:</label>
                        <Field className={`${mod.about_span} ${mod.name}`} type="text"
                               placeholder="Enter your name"
                               id="fullName"
                               name="fullName"/>
                        <ErrorMessage name="fullName">
                            {errorMsg => <span className={mod.formErrors}>{errorMsg}</span>}
                        </ErrorMessage>
                    </div>

                    <div className={mod.about_info}>
                        <label
                            htmlFor="aboutMe">About me:</label>
                        <Field className={mod.about_span} type="textarea"
                               placeholder="Enter your info"
                               id="aboutMe"
                               name="aboutMe"/>
                        <ErrorMessage name="aboutMe">
                            {errorMsg => <div className={mod.formErrors}>{errorMsg}</div>}
                        </ErrorMessage>
                    </div>

                    <div className={mod.about_info}>
                        <label
                            htmlFor="lookingForAJobDescription">My prof skills:</label>
                        <Field className={mod.about_span} type="textarea"
                               placeholder="Enter your job"
                               id="lookingForAJobDescription"
                               name="lookingForAJobDescription"/>
                        <ErrorMessage name="lookingForAJobDescription">
                            {errorMsg => <div className={mod.formErrors}>{errorMsg}</div>}
                        </ErrorMessage>
                    </div>

                    <div className={mod.about_info}>
                        <label
                            htmlFor="lookingForAJob">Looking for a job</label>
                        <Field className={`${mod.about_span} ${mod.checkbox}`} type="checkbox"
                               placeholder="Enter your job"
                               id="lookingForAJob"
                               name="lookingForAJob"/>
                        <ErrorMessage name="lookingForAJob">
                            {errorMsg => <div className={mod.formErrors}>{errorMsg}</div>}
                        </ErrorMessage>
                    </div>

                    <FieldArray name="contact" render={() => (
                        <div>
                            {arrayWithNames.map(name => contactsJsx(name))}
                        </div>
                    )}/>
                    <ErrorMessage name="contact">
                        {errorMsg => <div className={mod.formErrors}>{errorMsg}</div>}
                    </ErrorMessage>

                    <button type={"submit"} className={mod.button}
                            disabled={Formik.isSubmitting}>
                        {Formik.isSubmitting ? 'Please wait' : 'Save'}
                    </button>

                    <button onClick={goToViewMode}
                            className={mod.button}
                            type={"button"}>Cancel
                    </button>


                </Form>
            )
        }}
    </Formik>
}

export default AboutDataFormik;
