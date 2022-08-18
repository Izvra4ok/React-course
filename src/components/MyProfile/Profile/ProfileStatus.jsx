import React from "react";
import mod from "./Profile.module.css";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false,
        })
    }

    render() {
        return <div>
            {
                !this.state.editMode
                    ? <div>
                        <span onClick={ this.activateEditMode }>
                            {this.props.status}
                        </span>
                    </div>
                    : <div>
                         <span autofocus={true} onBlur={ this.deActivateEditMode }>
                             <input className={mod.form} type="text" value={this.props.status}/>
                         </span>
                    </div>
            }
        </div>
    }
}

export default ProfileStatus;