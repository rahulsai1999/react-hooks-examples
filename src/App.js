import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import useState from "./components/useState";
import useEffect from "./components/useEffect";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Welcome to React Hooks</h2>
      <br />
      <h3>Links to all the hooks:</h3>
      <div className="navbar">
        <a href="/useState">useState</a>
        <a href="/useEffect">useEffect</a>
      </div>
      <Router>
        <Route path="/useState" component={useState} />
        <Route path="/useEffect" component={useEffect} />
      </Router>
    </div>
  );
}

export default App;
