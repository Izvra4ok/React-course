import mod from "./AvaProfile.module.css";
import userDefaultPhoto from "./../../../../../assets/images/userDefaultAvatar.webp"


const AvaProfile = (props) => {

    return (
        <div>
            <img className={mod.ava_profile}
                 src={props.avatar
                     ? props.avatar
                     : userDefaultPhoto}
                 alt="avatar"/>
        </div>
    )
};


export default AvaProfile;
