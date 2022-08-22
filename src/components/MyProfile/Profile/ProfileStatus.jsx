import React from "react";
import mod from "./Profile.module.css";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    };

    deActivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status)
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status})
        }
    }

    render() {
        return <div>
            {
                !this.state.editMode
                    ? <div>
                        <span onClick={this.activateEditMode}>
                            {this.props.status || "Enter your status"}
                        </span>
                    </div>
                    : <div>
                         <span>
                             <input autoFocus={true}
                                    onChange={this.onStatusChange}
                                    onBlur={this.deActivateEditMode} className={mod.form}
                                    type="text" value={this.state.status}/>
                         </span>
                    </div>
            }
        </div>
    }
}

export default ProfileStatus;