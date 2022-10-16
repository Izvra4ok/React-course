import React from "react";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import mod from "./UserSearch.module.css";
import clsn from "classnames";
import {SearchFormType} from "../../../../Redux/usersPageReducer";


type PropsType = {
    onSearchChanged: (search: SearchFormType) => void,
    totalUsersCount: number,
    search: SearchFormType,
};

type FormType = {
    term: string,
    friend: string
};

type onSubmitProps = {
    setSubmitting: (setSubmitting:boolean) => void,
};

const validationSchema = Yup.object().shape({
    term: Yup.string()
        .max(20, "Must be shorter than 20 characters !"),
});


export const UserSearchForm: React.FC<PropsType> = React.memo((props) => {


    const {totalUsersCount, search, onSearchChanged} = props
    const initialValues = {
        term: search.term,
        friend: String(search.friend)
    };

    const handleSubmit = (values: FormType, onSubmitProps:onSubmitProps) => {
        const search2: SearchFormType = {
            term: values.term,
            friend: values.friend === 'true'
            ? true
            : values.friend === 'false' ? false : null
    };
        onSearchChanged(search2)
        onSubmitProps.setSubmitting(false);
    };

    return <Formik
            initialValues={initialValues}

        validationSchema={validationSchema}

        onSubmit={handleSubmit}
        validateOnMount>

        {Formik => {
            return (
                <Form className={mod.form}>
                    <div className={mod.statusErrors}>{Formik.status}</div>
                    <div>Total Users:  {totalUsersCount}</div>
                    <span>Search users:
                        <label htmlFor="term"/>
                        <Field className={clsn(mod.search)} type="text"
                               placeholder={"Enter"}
                               id="term"
                               name="term"/>
                    </span>

                    <Field name="friend" as="select" className={mod.select}>
                        <option value="null">All</option>
                        <option value="true">Followed</option>
                        <option value="false">Unfollowed</option>
                    </Field>

                    <button type={"submit"} className={mod.button}
                            disabled={Formik.isSubmitting || !Formik.isValid}>
                        {Formik.isSubmitting || !Formik.isValid ? '...wait' : 'Search'}
                    </button>

                    <ErrorMessage name="term">
                        {errorMsg => <span className={mod.formErrors}>{errorMsg}</span>}
                    </ErrorMessage>

                </Form>
            )
        }}
    </Formik>
});



