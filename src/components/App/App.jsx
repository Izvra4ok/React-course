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
    return (
        <div className="app_wrapper">
            <Header/>
            <Navbar online={props.state.navbarPage.onlinefriends}/>
            <div className="app_wrapper_content">
                <Routes>
                    <Route path="/profile/*"
                           element={<Profile
                               posts={props.state.profilePage.posts}
                               about={props.state.profilePage.aboutme}/>}></Route>
                    <Route path="/messenger/*"
                           element={<Messenger
                               messages={props.state.messengerPage.messegaes}
                               dialogues={props.state.messengerPage.dialogues}/>}></Route>
                    <Route path="/friends/*"
                           element={<Friends
                               online={props.state.friendsPage.online}
                               allfriends={props.state.friendsPage.friends}/>}></Route>
                </Routes>
            </div>

        </div>


    );
}

export default App;
