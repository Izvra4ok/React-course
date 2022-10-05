import React from "react";
import {ContactsType, ProfileType} from "../../../../../types/types";
import mod from "../About.module.css";
import github from "../../../../../assets/icons/Contacts/git.png";
import vk from "../../../../../assets/icons/Contacts/vk.png";
import facebook from "../../../../../assets/icons/Contacts/fb.png";
import instagram from "../../../../../assets/icons/Contacts/inst.png";
import twitter from "../../../../../assets/icons/Contacts/tw.png";
import website from "../../../../../assets/icons/Contacts/web.png";
import youtube from "../../../../../assets/icons/Contacts/youtube.png";
import mainLink from "../../../../../assets/icons/Contacts/site.png";


type ContactTypes = {
    profile: ProfileType
};


const Contact: React.FC<ContactTypes> = (props) => {

    let contactElements = Object.keys(props.profile.contacts);

    return (
        <span>
            {contactElements.map((c, index) => {
                    return <span key={index}> {props.profile.contacts[c as keyof ContactsType] === null
                        ? null
                        : props.profile.contacts[c as keyof ContactsType] === ""
                            ? null
                            : <a href={"//" + props.profile.contacts[c as keyof ContactsType]}  className={mod.icon}>
                                {c === "github"
                                    ? <img alt={"//" + props.profile.contacts[c]} src={github}/>
                                    : null}
                                {c === "vk"
                                    ? <img alt={"//" + props.profile.contacts[c]} src={vk}/>
                                    : null}
                                {c === "facebook"
                                    ? <img alt={"//" + props.profile.contacts[c]} src={facebook}/>
                                    : null}
                                {c === "instagram"
                                    ? <img alt={"//" + props.profile.contacts[c]} src={instagram}/>
                                    : null}
                                {c === "twitter"
                                    ? <img alt={"//" + props.profile.contacts[c]} src={twitter}/>
                                    : null}
                                {c === "website"
                                    ? <img alt={"//" + props.profile.contacts[c as keyof ContactsType]} src={website}/>
                                    : null}
                                {c === "youtube"
                                    ? <img alt={"//" + props.profile.contacts[c]} src={youtube} />
                                    : null}
                                {c === "mainLink"
                                    ? <img alt={"//" + props.profile.contacts[c]} src={mainLink} />
                                    : null}
                            </a>}
                </span>
                }
            )}
                </span>
    )
};


export default Contact