import mod from "./About.module.css";
import Ava from "../Ava/Ava";

const About = (props) => {
        let aboutMeData = [
            {
                id: 1,
                name: "Sergey Barzakouski",
                birthday: "18.08.1990",
                country: "Republic of Belarus",
                university: "Yanka Kupala State University of Grodno, facult: Law'18",
                website: "https://github.com/Izvra4ok"
            },
            {
                id: 2,
                name: "Alina Grigas",
                birthday: "29.12.1994",
                country: "Republic of Belarus",
                university: "Yanka Kupala State University of Grodno, facult: Psiho'18",
                website: "https://github.com/Izvra4ok"
            },
        ];
        return (
            <div className={mod.about}>
                <Ava/>
                <div className={mod.about_me}>
                    <p className={mod.about_info}>Name:
                        <span className={`${mod.about_span} ${mod.name}`}>{aboutMeData[0].name}</span>
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
    }
;

export default About;
