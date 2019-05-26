import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { addUser } from "./actions/userActions";

import Store from "./store";

import Routes from "./routes";

Store.dispatch(addUser("Me"));

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
