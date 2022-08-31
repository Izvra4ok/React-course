import React, {useState} from "react";
import mod from "./Profile.module.css";

const ProfileStatus = (props) => {

    const [status,setStatus] = useState(props.status)
    const [editMode,setEditMode] = useState(false)

    let activateEditMode = () => {
        setEditMode(true);
    }
    let deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    return (
    !editMode
        ? <div>
                        <span onClick={activateEditMode}>
                            {props.status || "Enter your status"}
                        </span>
        </div>
        : <div>
                         <span>
                             <input autoFocus={true}
                                    onChange={onStatusChange}
                                    onBlur={deActivateEditMode} className={mod.form}
                                    type="text" value={status}/>
                         </span>
        </div>

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

export default ProfileStatus;