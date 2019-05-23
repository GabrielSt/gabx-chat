import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import MessagesList from "./components/messagesList";
import MessageForm from "./components/messageForm";

class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar />
        <section id="main">
          <MessagesList />
          <MessageForm />
        </section>
      </div>
    );
  }
}

export default App;
