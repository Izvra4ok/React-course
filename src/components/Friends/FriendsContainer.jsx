import React from "react";
import Friend from "./Friend/Friend";
import Friends from "./Friends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {

    return {
        mapStateAllfriends: state.friendsPage.allfriends
            .map(fr => <Friend key={fr.id} follow={fr.followed} avatar={fr.avatarUrl} first={fr.first} last={fr.last} age={fr.age}
                               country={fr.location.country} city={fr.location.city} />),

        mapStateOnlinefriends: state.friendsPage.onlinefriends
            .map(fr => <Friend key={fr.id} follow={fr.followed} avatar={fr.avatarUrl} first={fr.first} last={fr.last} age={fr.age}
                                      country={fr.location.country} city={fr.location.city}/>)
    }

}

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer;