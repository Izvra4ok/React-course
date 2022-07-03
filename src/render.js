import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/index.css';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText, addMessages} from "./Redux/state";


const root = ReactDOM.createRoot(document.getElementById("root"));

export let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
            <App state={state} addPost={addPost} addmessages={addMessages} updateNewPostText={updateNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>
    );
};