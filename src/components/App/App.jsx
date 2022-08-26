import React from "react";
import "../nullstyle.css";
import "./App.css";
import {Route, Routes} from "react-router-dom"
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../MyProfile/Profile/ProfileContainer";
import MessengerContainer from "../Messenger/MessengerContainer";
import FriendsContainer from "../Friends/FriendsContainer";
import NavbarContainer from "../Navbar/NavbarContainer";
import HeaderContainer from "../Header/HeaderContainer";
import LoginContainer from "../Login/LoginContainer";

const App = () => {

    return (
        <div className="app_wrapper">
            <HeaderContainer/>
            <NavbarContainer />
            <div className="app_wrapper_content">
                <Routes>
                    <Route path="/login/*"
                           element={<LoginContainer />}>
                    </Route>
                    <Route path="/profile/:userId"
                           element={<ProfileContainer />}>
                    </Route>
                    <Route path="/profile/*"
                           element={<ProfileContainer />}>
                    </Route>
                    <Route path="/messenger/*"
                           element={<MessengerContainer/>}>
                    </Route>
                    <Route path="/friends/*"
                           element={<FriendsContainer />}>
                    </Route>
                    <Route path="/users/*"
                           element={<UsersContainer />}>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
