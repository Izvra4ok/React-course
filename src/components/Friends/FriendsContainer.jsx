import React from "react";
import Friend from "./Friend/Friend";
import FriendsOnline from "./OnlineFriends/FriendsOnline";
import Friends from "./Friends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {

    return {
        mapStateAllfriends: state.friendsPage.allfriends
            .map(fr => <Friend key={fr.id} first={fr.first} last={fr.last} age={fr.age}
                               country={fr.country} city={fr.city} ava={fr.ava}/>),

        mapStateOnlinefriends: state.friendsPage.onlinefriends
            .map(fr => <FriendsOnline key={fr.id} first={fr.first} last={fr.last} age={fr.age}
                                      country={fr.country} city={fr.city}/>)
    }

}

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer;