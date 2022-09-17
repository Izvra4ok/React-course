import React from "react";
import Paginator from "../common/Paginator";
import User from "./User/User";


const Users = (props) => {

    return <>
        <Paginator onPageChanged={props.onPageChanged}
                   totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}/>

        <User users={props.users}
              unfollowUser={props.unfollowUser}
              followUser={props.followUser}
              folllowingInProgress={props.folllowingInProgress}/>

        <Paginator onPageChanged={props.onPageChanged}
                   totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}/>
    </>
}


export default Users;
