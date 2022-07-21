import React from "react";
import OnlineFriends from "./OnlineNavbarFriends/OnlineFriends";
import Navbar from "./Navbar";
import {connect} from "react-redux";


let mapStateToProps = (state) => {

    return {
        friendsPage: state.friendsPage.online.map(on => <OnlineFriends key={on.id} avatar={on.avatarUrl} first={on.first}
                                                     last={on.last}/>)
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;