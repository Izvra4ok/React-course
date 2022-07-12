import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/index.css';
import reportWebVitals from './reportWebVitals';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/reduxStore"


const root = ReactDOM.createRoot(document.getElementById("root"));

let renderEntireTree = (state) => {
    debugger
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>
    );
};

renderEntireTree(store.getState());

store.subscribe( () => {
    let state = store.getState();
    renderEntireTree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
