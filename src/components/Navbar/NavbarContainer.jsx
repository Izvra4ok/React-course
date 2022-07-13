import React from "react";
import OnlineFriends from "./OnlineNavbarFriends/OnlineFriends";
import StoreContext from "../../storeContext";
import Navbar from "./Navbar";


const NavbarContainer = () => {

    return <StoreContext.Consumer>

        {(store) => {

            let state = store.getState().friendsPage;

            let onlineFriendsStateMap = state.onlinefriends.map(on => <OnlineFriends id={on.id} first={on.first}
                                                                                   last={on.last}/>);

            return <Navbar onlineFriendsStateMap={onlineFriendsStateMap}/>
        }}
    </StoreContext.Consumer>
};

export default NavbarContainer;