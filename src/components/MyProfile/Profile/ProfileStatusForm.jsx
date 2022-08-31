import React from "react";
import mod from "./Profile.module.css";
import {Formik, Form, Field, ErrorMessage} from "formik";
import Preloader from "../../common/Preloader";

const ProfilestatusForm = (props) => {
    if (!props.status) {
        return <Preloader/>
    }

    let initialValues = {
        status: props.status || ""
    }
    const updateStatus = (values) => {
        props.updateStatus(values.status)
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={updateStatus}>
            <Form>
                <div>
                    <label className={mod.formName}
                           htmlFor="status"/>
                    <Field className={mod.form} type="text"
                           placeholder="Enter your status"
                           id="status"
                           name="status"/>
                    <ErrorMessage name="status">
                        {errorMsg => <div className={mod.formErrors}>{errorMsg}</div>}
                    </ErrorMessage>
                </div>
            </Form>

        </Formik>
    )
}

// class ProfileStatus extends React.Component {
//
//     state = {
//         editMode: false,
//         status: this.props.status
//     };
//
//     activateEditMode = () => {
//         this.setState({
//             editMode: true,
//         })
//     };
//
//     deActivateEditMode = () => {
//         this.setState({
//             editMode: false,
//         });
//         this.props.updateStatus(this.state.status)
//     };
//
//     onStatusChange = (e) => {
//         this.setState({
//             status: e.currentTarget.value
//         });
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status})
//         }
//     }
//
//     render() {
//         return <div>
//             {
//                 !this.state.editMode
//                     ? <div>
//                         <span onClick={this.activateEditMode}>
//                             {this.props.status || "Enter your status"}
//                         </span>
//                     </div>
//                     : <div>
//                          <span>
//                              <input autoFocus={true}
//                                     onChange={this.onStatusChange}
//                                     onBlur={this.deActivateEditMode} className={mod.form}
//                                     type="text" value={this.state.status}/>
//                          </span>
//                     </div>
//             }
//         </div>
//     }
// }

export default ProfilestatusForm;