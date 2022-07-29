import mod from "./About.module.css";
import AvaProfile from "../AvaProfile/AvaProfile";


const About = (props) => {

    return <>
        {
            props.aboutme.map(ab => <span key={ab.id}>
            <div className={mod.about}>
                <AvaProfile avatar={ab.avatar}/>
                <div className={mod.about_me}>
                    <p className={mod.about_info}>Name:
                        <span className={`${mod.about_span} ${mod.name}`}>
                            {ab.name}
                        </span>
                    </p>
                    <p className={mod.about_info}>Birthday:
                        <span className={mod.about_span}>
                            {ab.birthday}
                        </span>
                    </p>
                    <p className={mod.about_info}>Location:
                        <span className={mod.about_span}>
                            {ab.country}
                        </span>
                    </p>
                    <p className={mod.about_info}>Education:
                        <span className={mod.about_span}>
                            {ab.university}
                        </span>
                    </p>
                    <p className={mod.about_info}>Website:
                        <span className={mod.about_span}>
                    <a href="https://github.com/Izvra4ok">
                        {ab.website}
                    </a>
                        </span>
                    </p>
                </div>
            </div>
                </span>
            )}
    </>
};

export default About;
