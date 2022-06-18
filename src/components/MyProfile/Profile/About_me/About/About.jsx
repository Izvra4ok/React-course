import mod from "./About.module.css";
import Ava from "../Ava/Ava";

const About = () => {
    return (<div className={mod.about}>
        <Ava/>
        <div className={mod.about_me}>
            <p className={mod.about_info}>Name:
                <span className={`${mod.about_span} ${mod.name}`}>Sergey Barzakouski</span>
            </p>
            <div className={mod.separator}></div>
            <p className={mod.about_info}>Birthday:
                <span className={mod.about_span}>18.08.1990</span>
            </p>
            <p className={mod.about_info}>Country:
                <span className={mod.about_span}>Republic of Belarus, Grodno</span>
            </p>
            <p className={mod.about_info}>Education: <span className={mod.about_span}>Yanka
                Kupala State University of Grodno, facult: Law'18</span>
            </p>
            <p className={mod.about_info}>Website:
                <span className={mod.about_span}>
                    <a href="https://github.com/Izvra4ok" target="_blank">github.com/Izvra4ok</a>
                </span>
            </p>
        </div>
    </div>);
};

export default About;
