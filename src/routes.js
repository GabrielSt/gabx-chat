import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Chat from "./containers/chatContainer";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" component={Chat} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
