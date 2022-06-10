import React from "react";
import "./../css/App.css";
import Article from "./Profile";
import Header from "./Header";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Article />
    </div>
  );
}

export default App;
