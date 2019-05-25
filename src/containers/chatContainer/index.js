import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addMessage } from "../../actions/messagesActions";

import Sidebar from "../../components/sidebar";
import MessageForm from "../../components/messageForm";
import MessagesList from "../../components/messagesList";

class ChatContainer extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar {...this.props} />
        <section id="main">
          <MessagesList {...this.props} />
          <MessageForm {...this.props} />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addMessage }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatContainer);
