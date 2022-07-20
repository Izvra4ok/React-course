import mod from "./About.module.css";
import AvaProfile from "../AvaProfile/AvaProfile";


const About = (props) => {

        return (
            <div className={mod.about}>
                <AvaProfile avatar={props.avatar} />
                <div className={mod.about_me}>
                    <p className={mod.about_info}>Name:
                        <span className={`${mod.about_span} ${mod.name}`}>
                            {props.name}
                        </span>
                    </p>
                    <p className={mod.about_info}>Birthday:
                        <span className={mod.about_span}>
                            {props.birthday}
                        </span>
                    </p>
                    <p className={mod.about_info}>Location:
                        <span className={mod.about_span}>
                            {props.country}
                        </span>
                    </p>
                    <p className={mod.about_info}>Education:
                        <span className={mod.about_span}>
                            {props.degree}
                        </span>
                    </p>
                    <p className={mod.about_info}>Website:
                        <span className={mod.about_span}>
                    <a href="https://github.com/Izvra4ok">
                        {props.web}
                    </a>
                        </span>
                    </p>
                </div>
            </div>);
    };

export default About;
