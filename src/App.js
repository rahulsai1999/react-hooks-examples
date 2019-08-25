import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import useState from "./components/useState";
import useEffect from "./components/useEffect";
import APICall from "./components/APICall";

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
        <a href="/apicall">API Call</a>
      </div>
      <Router>
        <Route path="/useState" component={useState} />
        <Route path="/useEffect" component={useEffect} />
        <Route path="/apicall" component={APICall} />
      </Router>
    </div>
  );
}

export default App;
