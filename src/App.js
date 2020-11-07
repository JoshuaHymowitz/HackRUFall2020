import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { connect } from "react-redux";
import { temp1 } from "./redux/action";

function App({ dispatch, temp }) {
  React.useEffect(() => {
    dispatch(temp1("bbb"));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {temp} <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  temp: state.state.temp,
});

export default connect(mapStateToProps)(App);
