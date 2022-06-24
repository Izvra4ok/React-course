import React from 'react';
import mod from "./Profile.module.css";
import About from "./About_me/About/About";
import NavbarPost from "./NavbarPost/NavbarPost"

const Profile = (props) => {
    let aboutMeData = [
        {
            id: 1,
            name: "Sergey Barzakouski",
            birthday: "18.08.1990",
            country: "Republic of Belarus, Grodno",
            university: "Yanka Kupala State University of Grodno, facult: Law'18",
            website: "github.com/Izvra4ok"
        },
    ];
    let AboutMeElement = aboutMeData
        .map(info => <About id={info.id} name={info.name} birthday={info.birthday} country={info.country}
                            degree={info.university} web={info.website}/>)
    return (
        <section className={mod.profile}>
            {AboutMeElement}
            <NavbarPost/>
        </section>
    );
};

export default Profile;