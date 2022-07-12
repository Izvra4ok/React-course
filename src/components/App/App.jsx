import React from "react";
import "../nullstyle.css";
import "./App.css";
import Profile from "../MyProfile/Profile/Profile";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Messenger from "../Messenger/Messenger";
import {Routes, Route} from "react-router-dom"
import Friends from "../Friends/Friends";


const App = (props) => {
debugger
    return (
        <div className="app_wrapper">
            <Header/>
            <Navbar online={props.state.friendsPage.onlinefriends} />
            <div className="app_wrapper_content">
                <Routes>
                    <Route path="/profile/*"
                           element={<Profile
                               store={props.store}
                               posts={props.state.profilePage.posts}
                               aboutme={props.state.profilePage.aboutme}
                           />}>

                    </Route>
                    <Route path="/messenger/*"
                           element={<Messenger
                               store={props.store}
                               messages={props.state.messengerPage.messages}
                               dialogues={props.state.messengerPage.dialogues}
                           />}>
                    </Route>
                    <Route path="/friends/*"
                           element={<Friends
                               allfriends={props.state.friendsPage.friends}
                               online={props.state.friendsPage.onlinefriends} />}>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
