import React from "react";
import "../nullstyle.css";
import "./App.css";
import Header from "../Header/Header";
import {Routes, Route} from "react-router-dom"
import ProfileContainer from "../MyProfile/Profile/ProfileContainer";
import MessengerContainer from "../Messenger/MessengerContainer";
import NavbarContainer from "../Navbar/NavbarContainer";
import FriendsContainer from "../Friends/FriendsContainer";


const App = () => {
debugger
    return (
        <div className="app_wrapper">
            <Header/>
            <NavbarContainer />
            <div className="app_wrapper_content">
                <Routes>
                    <Route path="/profile/*"
                           element={<ProfileContainer />}>
                    </Route>
                    <Route path="/messenger/*"
                           element={<MessengerContainer />}>
                    </Route>
                    <Route path="/friends/*"
                           element={<FriendsContainer />}>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
