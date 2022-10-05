import React, {useState} from "react";
import mod from "./About.module.css";
import Preloader from "../../../common/Preloader";
import AvaProfile from "./AvaProfile/AvaProfile";
import ProfileStatus from "./ProfileStatus";
import AboutDataFormik from "./AboutInfo/AboutDataFormik";
import clsn from "classnames";
import {ProfileType} from "../../../../types/types";
import Contact from "./AboutInfo/Contacts";


type PropsType = {
    id: number,
    savePhoto: (photoFile: File) => void,
    profile: ProfileType,
    updateProfile: (formData: ProfileType, setStatus: any, setSubmitting: any, goToViewMode: any) => void,
    status: string,
    updateStatus: (status: string) => string,
};


let About: React.FC<PropsType> = (props) => {

    const [editMode, setEditMode] = useState(false);

    let {profile, updateProfile} = props;

    if (!profile) {
        return <Preloader/>
    }

    let activateEditMode = () => {
        setEditMode(true);
    };

    const handleSubmit =  async (formData: ProfileType, setStatus: any, setSubmitting: any, goToViewMode: any) => {
        await updateProfile(formData, setStatus, setSubmitting, goToViewMode)
    };

    return (
        <div className={mod.about}>
            <AvaProfile avatar={props.profile.photos.large}/>

            <div className={mod.about_me}>
                {editMode
                    ? <AboutDataFormik profile={profile}
                                       goToViewMode={() => setEditMode(false)}
                                       handleSubmit={handleSubmit}/>
                    : <ProfileData goToEditMode={activateEditMode} profile={props.profile} id={props.id}/>
                }

                <div className={mod.about_info}>Status:
                    <span className={mod.about_span}>
                        <ProfileStatus status={props.status}
                                       id={props.id}
                                       profileId={props.profile.userId}
                                       updateStatus={props.updateStatus}/>
                    </span>
                </div>
            </div>
        </div>

    )
};

type ProfileDataType = {
    profile: ProfileType,
    id: number,
    goToEditMode: () => void
};

const ProfileData: React.FC<ProfileDataType> = ({profile, id, goToEditMode}) => {

    return <>
        {id === profile.userId && <div>
            <button className={mod.button}
                    onClick={goToEditMode}>Edit Profile
            </button>
        </div>}

        <div className={mod.about_info}>Name:
            <span className={clsn(mod.about_span, mod.name)}>
                        {profile.fullName}
                        </span>
        </div>

        <div className={mod.about_info}>About me:
            <span className={mod.about_span}>
                        {profile.aboutMe}
                        </span>
        </div>


        <div className={mod.about_info}>Looking for a job:
            <span className={mod.about_span}>
                        {profile.lookingForAJob
                            ? "YES"
                            : "No"}
            </span>
        </div>

        <div className={mod.about_info}>My prof skills:
            <span className={mod.about_span}>
                    {profile.lookingForAJobDescription}
            </span>
        </div>

        <div className={mod.about_info}>Contacts:
            <span className={mod.about_span}>
                <Contact profile={profile}/>
            </span>
        </div>
    </>
};



export default About;


// {/*{*/
// }
// {/*    Object.keys(profile.contacts).map(key => {*/
// }
// {/*        return <Contact key={key} contactTitle={key}*/
// }
// {/*                        contactValue={profile.contacts[key]}/>*/
// }
// {/*    })*/
// }
// {/*}*/
// }