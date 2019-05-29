import React, { Component } from "react";
import PropTypes from "prop-types";

// import { Container } from './styles';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ message: e.target.value });
  }

  handleClick(e) {
    if (e) {
      e.preventDefault();
    }

    this.props.addMessage(this.state.message, "Me");
    this.setState({ message: "" });
  }

  render() {
    return (
      <section id="new-message">
        <input
          id="msgInput"
          type="text"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={target => {
            if (target.charCode === 13) this.handleClick();
          }}
        />
      </section>
    );
  }
}

MessageForm.propTypes = {
  addMessage: PropTypes.func.isRequired
};

export default MessageForm;
