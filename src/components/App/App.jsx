import React from "react";
import "../nullstyle.css";
import "./App.css";
import Profile from "../MyProfile/Profile/Profile";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Messenger from "../Messenger/Messenger";
import {Routes, Route, BrowserRouter} from "react-router-dom"

const  App = () => {
    return (
            <div className="app_wrapper">
                <Header />
                <Navbar />
                <div className="app_wrapper_content">
                    <Routes>
                        <Route path="/profile/*" element={<Profile/>}></Route>
                        <Route path="/messenger/*" element={<Messenger/>}></Route>
                    </Routes>
                </div>

            </div>


    );
}

export default App;
