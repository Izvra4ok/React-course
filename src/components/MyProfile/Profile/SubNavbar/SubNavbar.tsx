import React, {ChangeEvent} from 'react';
import mod from "./SubNavbar.module.css"
import {NavLink} from "react-router-dom";


type PropsType = {
    id: number,
    savePhoto: (photoFile: File) => void,
    profileId: number,
};

const SubNavbar: React.FC<PropsType> = (props) => {

    let id = props.id;
    let profileId = props.profileId;
    let savePhoto = props.savePhoto;

    const onMainFotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length ) {
            savePhoto(e.target.files[0])
        }
    };

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
                    <NavLink to={"/profile/" + profileId + "/statistics"} className={SelectedLink => SelectedLink.isActive ? mod.active_link : mod.subnavbar_link}>
                        Statistics
                    </NavLink>
                </li>
                <li className={mod.subnavbar_li}>
                    <NavLink to={"/profile/" + profileId + "/memories"} className={SelectedLink => SelectedLink.isActive ? mod.active_link : mod.subnavbar_link}>
                        Memories
                    </NavLink>
                </li>
                <li className={mod.subnavbar_li}>
                    <NavLink to={"/profile/" + profileId + "/story"} className={SelectedLink => SelectedLink.isActive ? mod.active_link : mod.subnavbar_link}>
                        Story archive
                    </NavLink>
                </li>
            </ul>
        </nav>
        </div>
    );
};

export default SubNavbar;

