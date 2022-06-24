import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

let dialogsData = [
    {id: 1, name: "Sergey"},
    {id: 2, name: "Alina"},
    {id: 3, name: "Denis"},
    {id: 4, name: "Anna"},
    {id: 5, name: "Vladimir"},
];
let messagesData = [
    {id: 1, text: "Hi"},
    {id: 2, text: "Hello"},
    {id: 3, text: "Good bye"},
    {id: 4, text: "How are you?"},
];

let friendsData = [
    {id: 1, first: "Sergey", last: "Barzakouski", age: 31, country: "Belarus", city: "Grodno",},
    {id: 2, first: "Alina", last: "Grigas", age: 18, country: "Belarus", city: "Grodno",},
    {id: 3, first: "Vova", last: "Barzakouski", age: 7, country: "The Netherlands", city: "Amsterdam",},
    {id: 4, first: "Denis", last: "Barzakouski", age: 38, country: "The Netherlands", city: "Amsterdam",},
    {id: 5, first: "Anna", last: "Barzakouskay", age: 38, country: "The Netherlands", city: "Amsterdam",},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App messages={messagesData} dialogues={dialogsData} friends={friendsData}/>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
