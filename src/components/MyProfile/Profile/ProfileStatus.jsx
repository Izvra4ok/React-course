import React, {useEffect, useState} from "react";
import mod from "./Profile.module.css";


const ProfileStatus = (props) => {

    const [status, setStatus] = useState(props.status);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);


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
        props.id === props.profileId
            ? !editMode
                ? <div>
                        <span onClick={activateEditMode}>
                            {props.status || "Enter your status"}
                        </span>
                </div>
                : <div>
                         <span>
                             <input autoFocus={true}
                                    onChange={onStatusChange}
                                    onBlur={deActivateEditMode}
                                    className={mod.form}
                                    type="text" value={status}/>
                         </span>
                </div>
            : <div>
                        <span>
                            {props.status}
                        </span>
            </div>

    )
};


export default ProfileStatus;