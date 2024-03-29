import React from "react";
import mod from "./User.module.css";
import {NavLink} from "react-router-dom";
import {UserAva} from "./UserAva/UserAva";
import {UsersType} from "../../../types/types";
import {UserSearchForm} from "./UserSearch/UserSearchForm";
import {SearchFormType} from "../../../Redux/usersPageReducer";


type UserType = {
    unfollowUser: (userId: number) => void,
    followUser: (userId: number) => void,
    onSearchChanged: (search: SearchFormType) => void,
    users: Array<UsersType>,
    folllowingInProgress: Array<number>,
    totalUsersCount: number,
};

const User: React.FC<UserType> = React.memo((props) => {

    const {users, folllowingInProgress, totalUsersCount} = props;

    return (
        <div className={mod.users}>

            <UserSearchForm onSearchChanged={props.onSearchChanged}
                            totalUsersCount={totalUsersCount}/>

            {
                users.map(user => <div className={mod.all_users} key={user.id}>

                        <div className={mod.users_avaButton}>

                            <UserAva id={user.id} photos={user.photos.small} {...props}/>

                                <div>
                                    {user.followed
                                        ? <button className={mod.button}
                                                  disabled={folllowingInProgress.includes(user.id)}
                                                  onClick={() => {
                                                      props.unfollowUser(user.id)
                                                  }}>UNFOLLOW
                                        </button>
                                        : <button className={mod.button}
                                                  disabled={folllowingInProgress.includes(user.id)}
                                                  onClick={() => {
                                                      props.followUser(user.id)
                                                  }}>FOLLOW
                                        </button>
                                    }
                                </div>

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
        </div>

    )
});


export default User;
