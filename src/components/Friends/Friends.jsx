import React from "react";
import mod from "./Friends.module.css";
import Friend from "./Friend/Friend";


const Friends = (props) => {
    let Friends = [
        {id: 1, first: "Sergey", last: "Barzakouski", age: 31, country: "Belarus", city: "Grodno",},
        {id: 2, first: "Alina", last: "Grigas", age: 18, country: "Belarus", city: "Grodno",},
        {id: 3, first: "Vova", last: "Barzakouski", age: 7, country: "The Netherlands", city: "Amsterdam",},
        {id: 4, first: "Denis", last: "Barzakouski", age: 38, country: "The Netherlands", city: "Amsterdam",},
        {id: 5, first: "Anna", last: "Barzakouskay", age: 38, country: "The Netherlands", city: "Amsterdam",},
    ];
    let FriendElement = Friends.map(fr => <Friend id={fr.id} first={fr.first}
                                                  last={fr.last} age={fr.age} country={fr.country} city={fr.city}/>)
    return (
        <div className={mod.friends}>
            {FriendElement}
        </div>
    )
}

export default Friends;