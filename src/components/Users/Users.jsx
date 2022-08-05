import React from "react";
import mod from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userDefaultFoto from "../../assets/images/userDefaultAvatar.webp";
import * as axios from "axios";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let carousel = props.currentPage;
    let carouselLeft = ((carousel - 5) < 0) ? 0 : carousel - 4;
    let carouselRight = carousel + 4;
    let slicedPages = pages.slice(carouselLeft, carouselRight);

    let SelectedLink = () => {
        return SelectedLink => SelectedLink.isActive ? mod.active_link : mod.user_about
    };

    return (
        <div className={mod.users}>All users
            <div>
                {
                    slicedPages.map(p => {
                        return <button className={props.currentPage === p && mod.selectedPage}
                                       onClick={() => {
                                           props.onPageChanged(p)
                                       }}>{p}</button>
                    })
                }
            </div>
            {
                props.users.map(user => <div className={mod.all_users} key={user.id}>
                        <div className={mod.users_avaButton}>
                            <NavLink to={"/profile/" + user.id} className={SelectedLink()}>
                                <img className={mod.users_ava} src={user.photos.small != null
                                    ? user.photos.small
                                    : userDefaultFoto} alt="avatar"/>
                            </NavLink>
                            <NavLink to={"id" + user.name} className={SelectedLink()}>
                                <div>
                                    {user.followed
                                        ? <button className={mod.button}
                                                  onClick={() => {
                                                      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                          {withCredentials: true,
                                                              headers: {
                                                                  "API-KEY" : "a06710b5-0806-494d-b568-a01e9df6c4b1",
                                                              }})
                                                          .then(response => {
                                                              if (response.data.resultCode === 0) {
                                                                  props.unfollowUser(user.id);
                                                              }
                                                          });
                                                  }}>UNFOLLOW</button>
                                        : <button className={mod.button}
                                                  onClick={() => {
                                                      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{}, {
                                                          withCredentials: true,
                                                          headers: {
                                                              "API-KEY" : "a06710b5-0806-494d-b568-a01e9df6c4b1",
                                                          }
                                                      })
                                                          .then(response => {
                                                              if (response.data.resultCode === 0) {
                                                                  props.followUser(user.id);
                                                              }
                                                          });
                                                  }}>FOLLOW</button>}
                                </div>
                            </NavLink>
                        </div>
                        <div>
                            <div className={mod.user_about}>
                                <div className={mod.users_fullname}>
                                    <NavLink to={"id" + user.name} className={SelectedLink()}>
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

export default Users;
