import React from "react";
import Friend from "./Friend/Friend";
import FriendsOnline from "./OnlineFriends/FriendsOnline";
import StoreContext from "../../storeContext";
import Friends from "./Friends";


const FriendsContainer = () => {

    return <StoreContext.Consumer>

        {(store) => {

            let state = store.getState().friendsPage

            let friendStateMap = state.allfriends.map(fr => <Friend key={fr.toString()} id={fr.id} first={fr.first}
                                                                         last={fr.last} age={fr.age}
                                                                         country={fr.country}
                                                                         city={fr.city} ava={fr.ava}/>);

            let onlineFriendsStateMap = state.onlinefriends.map(fr => <FriendsOnline id={fr.id} first={fr.first}
                                                                                   last={fr.last} age={fr.age}
                                                                                   country={fr.country}
                                                                                   city={fr.city}/>);
            return <Friends friendStateMap={friendStateMap}
                            onlineFriendsStateMap={onlineFriendsStateMap}/>
        }}
    </StoreContext.Consumer>
};

export default FriendsContainer;