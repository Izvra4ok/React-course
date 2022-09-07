import React from "react";
import mod from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userDefaultFoto from "../../assets/images/userDefaultAvatar.webp";


const Users = (props) => {


    return (
        <div className={mod.users}>All users
            <div>
                {
                    props.slicedPages().map( (p, index) => {
                        return <button key={index} className={props.currentPage === p && mod.selectedPage}
                                       onClick={() => {
                                           props.onPageChanged(p)
                                       }}>{p}</button>
                    })
                }
            </div>

            {
                props.users.map(user => <div className={mod.all_users} key={user.id}>
                        <div className={mod.users_avaButton}>
                            <NavLink to={"/profile/" + user.id}>
                                <img className={mod.users_ava} src={user.photos.small != null
                                    ? user.photos.small
                                    : userDefaultFoto} alt="avatar"/>
                            </NavLink>
                            <NavLink to={"id" + user.name}>
                                <div>
                                    {user.followed
                                        ? <button className={mod.button}
                                                  disabled={props.folllowingInProgress.includes(user.id)}
                                                  onClick={() => {props.unfollowUser(user.id)}}>UNFOLLOW
                                        </button>
                                        : <button className={mod.button}
                                                  disabled={props.folllowingInProgress.includes(user.id)}
                                                  onClick={() => {props.followUser(user.id)}}>FOLLOW
                                        </button>
                                    }
                                </div>
                            </NavLink>
                        </div>
                        <div>
                            <div className={mod.user_about}>
                                <div className={mod.users_fullname}>
                                    <NavLink to={"/profile/" + user.id}>
                                        {user.name}
                                    </NavLink>
                                </div>
                                <div className={mod.users_info}>
                                    {"user.age"} years old, from {"user.location.country"} {"user.location.city"}
                                </div>
                                <div className={mod.users_status}>
                                    Status: {user.status}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <div>
                {
                    props.slicedPages().map( (p, index) => {
                        return <button key={index} className={props.currentPage === p && mod.selectedPage}
                                       onClick={() => {
                                           props.onPageChanged(p)
                                       }}>{p}</button>
                    })
                }
            </div>
        </div>
    )
}

export default Users;
