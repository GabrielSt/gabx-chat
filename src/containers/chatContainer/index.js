import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Sidebar from "../../components/sidebar";
import MessageForm from "../../components/messageForm";
import MessagesList from "../../components/messagesList";

class ChatContainer extends Component {
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

const mapStateToProps = state => ({
  chat: state.chat
});

// const mapDispatchToProps = dispatch => bindActionCreators();

export default connect(
  mapStateToProps
  //   mapDispatchToProps
)(ChatContainer);
