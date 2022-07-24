import React from "react";
import mod from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userDefaultFoto from "../../assets/images/userDefaultAvatar.webp";
import * as axios from "axios";



class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    };


    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            if ( pages.length < 20 ) {
                pages.push( i) } }

        let carousel = this.props.currentPage;
        let carouselLeft = ((carousel - 5) < 0) ?  0  : carousel - 4 ;
        let carouselRight = carousel + 4;
        let slicedPages = pages.slice( carouselLeft, carouselRight);

        let SelectedLink = () => {
            return SelectedLink => SelectedLink.isActive ? mod.active_link : mod.user_about
        };

        return (
            <div className={mod.users}>All users
                <div>
                    {slicedPages.map(p => {
                        return <button className={this.props.currentPage === p && mod.selectedPage}
                                     onClick={ (e) => {
                                         this.onPageChanged(p) } }>{p}</button>})}
                </div>
                    {
                        this.props.users.map(user => <div className={mod.all_users} key={user.id}>
                        <div className={mod.users_avaButton}>
                        <NavLink to={"id" + user.name} className={SelectedLink()}>
                        <img className={mod.users_ava} src={user.photos.small != null
                        ? user.photos.small
                        : userDefaultFoto} alt="avatar"/>
                        </NavLink><NavLink to={"id" + user.name} className={SelectedLink()}>
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
                    }


                    export default Users;
