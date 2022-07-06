import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/index.css';
import reportWebVitals from './reportWebVitals';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/state";


const root = ReactDOM.createRoot(document.getElementById("root"));

let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={store.addPost.bind(store)}
                     addmessages={store.addMessages.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}
                     updateNewMessageText={store.updateNewMessageText.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>
    );
};

renderEntireTree(store.getState())

store.subscriber(renderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
