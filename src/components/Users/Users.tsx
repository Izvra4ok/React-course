import React from "react";
import Paginator from "../common/Paginator";
import User from "./User/User";
import {UsersType} from "../../types/types";
import {SearchFormType} from "../../Redux/usersPageReducer";

type PropsType = {
    onPageChanged: (pageNumber: number) => void,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    users: Array<UsersType>,
    unfollowUser: (userId: number) => void,
    followUser: (userId: number) => void,
    folllowingInProgress: Array<number>,
    onSearchChanged: (search: SearchFormType) => void,
};

const Users: React.FC<PropsType> = (props) => {

    return <>
        <Paginator onPageChanged={props.onPageChanged}
                   totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}/>

        <User users={props.users}
              unfollowUser={props.unfollowUser}
              followUser={props.followUser}
              folllowingInProgress={props.folllowingInProgress}
              onSearchChanged={props.onSearchChanged}/>

        <Paginator onPageChanged={props.onPageChanged}
                   totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}/>
    </>
}


export default Users;
