import React from "react";
import mod from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userDefaultFoto from "../../assets/images/userDefaultAvatar.webp";
import * as axios from "axios";


class Users extends React.Component {

    SelectedLink = () => {
        return SelectedLink => SelectedLink.isActive ? mod.active_link : mod.user_about};

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    };

    render() {

        return (
            <div className={mod.users}>All users
                <button className={mod.button} onClick={this.getUsers}>Get</button>
                {
                    this.props.users.map(user => <div className={mod.all_users} key={user.id}>
                            <div className={mod.users_avaButton}>
                                <NavLink to={"id" + user.name} className={this.SelectedLink()}>
                                    <img className={mod.users_ava} src={user.photos.small != null
                                        ? user.photos.small
                                        : userDefaultFoto} alt="avatar"/>
                                </NavLink>
                                <NavLink to={"id" + user.name} className={this.SelectedLink()}>
                                    <div>
                                        {user.followed
                                            ? <button className={mod.button}
                                                      onClick={() => this.props.unfollowUser(user.id)}>UNFOLLOW</button>
                                            : <button className={mod.button}
                                                      onClick={() => this.props.followUser(user.id)}>FOLLOW</button>}
                                    </div>
                                </NavLink>
                            </div>
                            <div>
                                <div className={mod.user_about}>
                                    <div className={mod.users_fullname}>
                                        <NavLink to={"id" + user.name} className={this.SelectedLink()}>
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
            </div>
        )
    }
}


export default Users;
