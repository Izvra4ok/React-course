import React from "react";
import "../nullstyle.css";
import "./App.css";
import Profile from "../MyProfile/Profile/Profile";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Messenger from "../Messenger/Messenger";
import {Routes, Route} from "react-router-dom"
import Friends from "../Friends/Friends";


// let dialogsData = [
//     {id: 1, name: "Sergey"},
//     {id: 2, name: "Alina"},
//     {id: 3, name: "Denis"},
//     {id: 4, name: "Anna"},
//     {id: 5, name: "Vladimir"},
// ];
// let messagesData = [
//     {id: 1, text: "Hi"},
//     {id: 2, text: "Hello"},
//     {id: 3, text: "Good bye"},
//     {id: 4, text: "How are you?"},
// ];
const App = (props) => {
    return (
        <div className="app_wrapper">
            <Header/>
            <Navbar/>
            <div className="app_wrapper_content">
                <Routes>
                    <Route path="/profile/*" element={<Profile/>}></Route>
                    <Route path="/messenger/*"
                           element={<Messenger dialogues={props.dialogues} messages={props.messages}/>}></Route>
                    <Route path="/friends/*" element={<Friends/>}></Route>
                </Routes>
            </div>

        </div>


    );
}

export default App;
