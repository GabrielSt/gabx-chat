import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";

import Store from "./store";

import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
