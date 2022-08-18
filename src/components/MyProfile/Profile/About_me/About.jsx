import mod from "./About.module.css";
import Preloader from "../../../common/Preloader";
import AvaProfile from "./AvaProfile/AvaProfile";
import facebookImg from "../../../../assets/icons/Contacts/fb.png";
import githubImg from "../../../../assets/icons/Contacts/git.png"
import websiteImg from "../../../../assets/icons/Contacts/web.png"
import vkImg from "../../../../assets/icons/Contacts/vk.png"
import twitterImg from "../../../../assets/icons/Contacts/tw.png";
import instargrammImg from "../../../../assets/icons/Contacts/inst.png";
import youtubeImg from "../../../../assets/icons/Contacts/youtube.png";
import mainLinkImg from "../../../../assets/icons/Contacts/site.png";
import ProfileStatus from "../ProfileStatus";


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
                <div className={mod.about_info}>About me:
                    <span className={mod.about_span}>
                        {props.profile.aboutMe}
                    </span>
                </div>
                <div className={mod.about_info}>Status:
                    <span className={mod.about_span}>
                        <ProfileStatus status={"Hey my friends"}/>
                    </span>
                </div>
                <div className={mod.about_info}>Location:
                    <span className={mod.about_span}>
                                  Location
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
                        <a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook
                            ? <img src={facebookImg} alt="facebook"/>
                            : null}</a>
                        <a href={props.profile.contacts.github}>{props.profile.contacts.github
                            ? <img src={githubImg} alt="github"/>
                            : null}</a>
                        <a href={props.profile.contacts.website}>{props.profile.contacts.website
                            ? <img src={websiteImg} alt="website"/>
                            : null}</a>
                        <a href={props.profile.contacts.vk}>{props.profile.contacts.vk
                            ? <img src={vkImg} alt="vk"/>
                            : null}</a>
                        <a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter
                            ? <img src={twitterImg} alt="twitter"/>
                            : null}</a>
                        <a href={props.profile.contacts.instagram}>{props.profile.contacts.instagramm
                            ? <img src={instargrammImg} alt="instargamm"/>
                            : null}</a>
                        <a href={props.profile.contacts.youtube}>{props.profile.contacts.youtube
                            ? <img src={youtubeImg} alt="youtube"/>
                            : null}</a>
                        <a href={props.profile.contacts.mainLink}>{props.profile.contacts.mainLink
                            ? <img src={mainLinkImg} alt="mainLink"/>
                            : null}</a>
                    </span>
                </div>
            </div>
        </div>

    )
}

export default About;