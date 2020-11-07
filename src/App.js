import logo from "./logo.svg";
import "./App.css";
import React from "react";


import ButtonAppBar from './components/AppBar';
import AppBody from './components/AppBody';

function App() {

  return (
    <div className="App">
      <ButtonAppBar />
      <div>
      <AppBody />

      </div>
    </div>
  );
}

export default App;
