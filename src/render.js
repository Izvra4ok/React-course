import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/index.css';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./Redux/state";
import {addMessages} from "./Redux/state";

export let renderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addpost={addPost} addmessages={addMessages}/>
            </BrowserRouter>
        </React.StrictMode>
    );
};


