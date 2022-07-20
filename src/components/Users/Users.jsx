import React from "react";
import mod from "./Users.module.css"
import {NavLink} from "react-router-dom";


const Users = (props) => {

    let SelectedLink = () => {
        return (

            SelectedLink => SelectedLink.isActive ? mod.active_link : mod.user_about
        );
    };

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                followed: true,
                first: "Yura",
                last: "Grigas",
                age: 40,
                location: {country: "Belarus", city: "Grodno"},
                status: "I'm boss"
            },
            {
                id: 2,
                avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                followed: false,
                first: "Alina",
                last: "Grigas",
                age: 18,
                location: {country: "Belarus", city: "Grodno"},
                status: "I'm boss"
            },
            {
                id: 3,
                avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                followed: true,
                first: "Denis",
                last: "Barzakouski",
                age: 38,
                location: {country: "The Netherlands", city: "Amsterdam"},
                status: "I'm boss"
            },
            {
                id: 4,
                avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                followed: true,
                first: "Anna",
                last: "Barzakouskaya",
                age: 38,
                location: {country: "The Netherlands", city: "Amsterdam"},
                status: "I'm free"
            },
            {
                id: 5,
                avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                followed: true,
                first: "Vladimir",
                last: "Barzakouski",
                age: 60,
                location: {country: "Belarus", city: "Grodno",},
                status: "Good bye"
            },
            {
                id: 6,
                avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                followed: false,
                first: "Alexsadra",
                last: "Grigas",
                age: 40,
                location: {country: "Belarus", city: "Grodno",},
                status: "Hello"
            },
            {
                id: 7,
                avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                followed: true,
                first: "Vova",
                last: "Barzakouski",
                age: 8,
                location: {country: "The Netherlands", city: "Amsterdam",},
                status: "Hi"
            },
            {
                id: 8,
                avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                followed: true,
                first: "Raya",
                last: "Barzakouskaya",
                age: 59,
                location: {country: "Belarus", city: "Grodno",},
                status: ":)"
            },
            {
                id: 9,
                avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                followed: true,
                first: "Eva",
                last: "Barzakouskaya",
                age: 4,
                location: {country: "Belarus", city: "Grodno",},
                status: "=)"
            },
            {
                id: 10,
                avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                followed: true,
                first: "Valentina",
                last: "Svorchuk",
                age: 23,
                location: {country: "Belarus", city: "Grodno"},
                status: "Have a nice good day"
            },
            {
                id: 11,
                avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                followed: true,
                first: "Konstantin",
                last: "Svorchuk",
                age: 18,
                location: {country: "Belarus", city: "Grodno"},
                status: "Have a nice good day"
            },
            {
                id: 12,
                avatarUrl: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                followed: true,
                first: "Valentina",
                last: "Svorchuk",
                age: 23,
                location: {country: "Belarus", city: "Grodno"},
                status: "Have a nice good day"
            },
        ],)
    }

    return (
        <div className={mod.users}>All users
            {
                props.users.map(user => <div className={mod.all_users} key={user.id}>
                        <div className={mod.users_avaButton}>
                            <NavLink to={"id" + user.first + user.last} className={SelectedLink()}>
                                <img className={mod.users_ava} src={user.avatarUrl} alt="avatar"/>
                            </NavLink>
                            <NavLink to={"id" + user.first + user.last} className={SelectedLink()}>
                                <div>
                                    {user.followed
                                        ? <button className={mod.button}
                                                  onClick={() => props.unfollowUser(user.id)}>UNFOLLOW</button>
                                        : <button className={mod.button}
                                                  onClick={() => props.followUser(user.id)}>FOLLOW</button>}
                                </div>
                            </NavLink>
                        </div>
                        <div>
                            <div className={mod.user_about}>
                                <div className={mod.users_fullname}>
                                    <NavLink to={"id" + user.first + user.last} className={SelectedLink()}>
                                        {user.first} {user.last}
                                    </NavLink>
                                </div>
                                <div className={mod.users_info}>
                                    {user.age} years old, from {user.location.country} {user.location.city}
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
};


export default Users;
