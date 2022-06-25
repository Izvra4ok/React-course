import React from "react";
import mod from "./Friends.module.css";
import Friend from "./Friend/Friend";


const Friends = (props) => {
    let FriendElement = props.friends.map(fr => <Friend id={fr.id} first={fr.first}
                                                        last={fr.last} age={fr.age} country={fr.country} city={fr.city}
                                                        ava={fr.ava}/>)
    return (
        <div className={mod.friends}>
            {FriendElement}
        </div>
    )
}

export default Friends;