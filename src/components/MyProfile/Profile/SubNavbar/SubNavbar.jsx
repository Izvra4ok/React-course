import React from 'react';
import mod from "./SubNavbar.module.css"
import {NavLink} from "react-router-dom";


const SubNavbar = (props) => {

    let id = props.id;
    let profileId = props.profileId;
    let savePhoto = props.savePhoto;

    const onMainFotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    let SelectedLink = () => {
        return SelectedLink => SelectedLink.isActive ? mod.active_link : mod.subnavbar_link};

    return (
        <div className={mod.navbar}>
        <nav className={mod.subnavbar}>
            <ul className={mod.subnavbar_list}>
                {
                    profileId === id && <li className={mod.subnavbar_li}>
                    <form>
                            <input type="file" name="file" id="file" className={mod.inputfile}
                                   onChange={onMainFotoSelected}/>
                            <label htmlFor="file">Change photo</label>

                        </form>

                </li>
                }
                <li className={mod.subnavbar_li}>
                    <NavLink to={"/profile/" + profileId + "/statistics"} className={SelectedLink()}>
                        Statistics
                    </NavLink>
                </li>
                <li className={mod.subnavbar_li}>
                    <NavLink to={"/profile/" + profileId + "/memories"} className={SelectedLink()}>
                        Memories
                    </NavLink>
                </li>
                <li className={mod.subnavbar_li}>
                    <NavLink to={"/profile/" + profileId + "/story"} className={SelectedLink()}>
                        Story archive
                    </NavLink>
                </li>
            </ul>
        </nav>
        </div>
    );
};

export default SubNavbar;

