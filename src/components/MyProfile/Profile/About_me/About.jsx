import mod from "./About.module.css";
import Preloader from "../../../common/Preloader";
import AvaProfile from "./AvaProfile/AvaProfile";


let About = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={mod.about}>
            <AvaProfile avatar={props.profile.photos.large}/>
            <div className={mod.about_me}>
                <div className={mod.about_info}>Name:
                    <span className={`${mod.about_span} ${mod.name}`}>
                        {props.profile.fullName}
                    </span>
                </div>
                <div className={mod.about_info}>Birthday:
                    <span className={mod.about_span}>
                        "Birthday"
                    </span>
                </div>
                <div className={mod.about_info}>Location:
                    <span className={mod.about_span}>
                "Location"
                    </span>
                </div>
                <div className={mod.about_info}>Education:
                    <span className={mod.about_span}>
                        "Education"
                    </span>
                </div>
                <div className={mod.about_info}>Job:
                    <span className={mod.about_span}>
                        {props.profile.lookingForAJob}
                        {props.profile.lookingForAJobDescription}
                    </span>
                </div>
                <div className={mod.about_info}>Contacts:
                    <span className={mod.about_span}>
                        <p><a href={props.profile.contacts.facebook}>facebook: {props.profile.contacts.facebook}</a></p>
                        <p><a href={props.profile.contacts.github}>github: {props.profile.contacts.github}</a></p>
                        <p><a href={props.profile.contacts.website}>website: {props.profile.contacts.website}</a></p>
                        <p><a href={props.profile.contacts.vk}>vk: {props.profile.contacts.vk}</a></p>
                        <p><a href={props.profile.contacts.twitter}>twitter: {props.profile.contacts.twitter}</a></p>
                        <p><a href={props.profile.contacts.instagram}>instagram: {props.profile.contacts.instagram}</a></p>
                        <p><a href={props.profile.contacts.youtube}>youtube: {props.profile.contacts.youtube}</a></p>
                        <p><a href={props.profile.contacts.mainLink}>mainLink: {props.profile.contacts.mainLink}</a></p>
                    </span>
                </div>
            </div>
        </div>

    )
}

export default About;