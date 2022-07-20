import mod from "./AvaProfile.module.css";


const AvaProfile = (props) => {

  return (
        <img className={mod.ava_profile}
             src={props.avatar}
          alt="avatar"/>
  );
};
export default AvaProfile;
