import React, {useState} from "react";
import mod from "./About.module.css";
import Preloader from "../../../common/Preloader";
import AvaProfile from "./AvaProfile/AvaProfile";
import ProfileStatus from "../ProfileStatus";
import AboutDataFormik from "./AboutDataFormik";
import github from "../../../../assets/icons/Contacts/git.png";
import vk from "../../../../assets/icons/Contacts/vk.png";
import facebook from "../../../../assets/icons/Contacts/fb.png";
import instagram from "../../../../assets/icons/Contacts/inst.png";
import twitter from "../../../../assets/icons/Contacts/tw.png";
import website from "../../../../assets/icons/Contacts/web.png";
import youtube from "../../../../assets/icons/Contacts/youtube.png";
import mainLink from "../../../../assets/icons/Contacts/site.png";


let About = (props) => {

    const [editMode, setEditMode] = useState(false);

    let {profile, updateProfile} = props;

    if (!profile) {
        return <Preloader/>
    }

    let activateEditMode = () => {
        setEditMode(true);
    };

    const handleSubmit =  async (formData, setStatus, setSubmitting, goToViewMode) => {
        await updateProfile(formData, setStatus, setSubmitting, goToViewMode)
    };

    return (
        <div className={mod.about}>
            <AvaProfile avatar={props.profile.photos.large}/>

            <div className={mod.about_me}>
                {editMode
                    ? <AboutDataFormik profile={profile}
                                       initialValues={profile}
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
}


const ProfileData = ({profile, id, goToEditMode}) => {

    return <>
        {id === profile.userId && <div>
            <button className={mod.button}
                    onClick={goToEditMode}>Edit Profile
            </button>
        </div>}

        <div className={mod.about_info}>Name:
            <span className={`${mod.about_span} ${mod.name}`}>
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


const Contact = (props) => {

    let contactElements = Object.keys(props.profile.contacts);

    return (
        <span>
            {contactElements.map((c, index) => {
                    return <span key={index}> {props.profile.contacts[c] === null
                        ? null
                        : props.profile.contacts[c] === ""
                            ? null
                            : <a href={"//" + props.profile.contacts[c]}  className={mod.icon} key={c.id}>
                                {c === "github"
                                    ? <img alt={"//" + props.profile.contacts[c]} src={github} key={c.id}/>
                                    : null}
                                {c === "vk"
                                    ? <img alt={"//" + props.profile.contacts[c]} src={vk} key={c.id}/>
                                    : null}
                                {c === "facebook"
                                    ? <img alt={"//" + props.profile.contacts[c]} src={facebook} key={c.id}/>
                                    : null}
                                {c === "instagram"
                                    ? <img alt={"//" + props.profile.contacts[c]} src={instagram} key={c.id}/>
                                    : null}
                                {c === "twitter"
                                    ? <img alt={"//" + props.profile.contacts[c]} src={twitter} key={c.id}/>
                                    : null}
                                {c === "website"
                                    ? <img alt={"//" + props.profile.contacts[c]} src={website} key={c.id}/>
                                    : null}
                                {c === "youtube"
                                    ? <img alt={"//" + props.profile.contacts[c]} src={youtube} key={c.id}/>
                                    : null}
                                {c === "mainLink"
                                    ? <img alt={"//" + props.profile.contacts[c]} src={mainLink} key={c.id}/>
                                    : null}
                            </a>}
                </span>
                }
            )}
                </span>
    )
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