import React from "react";
import "../nullstyle.css"
import "./App.css";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

function App() {
    return (
        <div className="app_wrapper">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;
