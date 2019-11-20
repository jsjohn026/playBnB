import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";

class Developer extends React.Component {

  render() {
    return (
      <div className="login-form-box">
        <div onClick={this.props.closeModal} className="close-x">X</div>
        <div>This feature is under development.</div>
        <div>In the meantime, check out the developer:</div>
        <div><a href="https://www.jasminejohn.io/">
            <button className="reserve-button">Portfolio</button></a></div>
        <div><a href="https://github.com/jsjohn026">
            <button className="reserve-button">Github</button></a></div>
        <div><a href="https://www.linkedin.com/in/jasmine-john-026/">
            <button className="reserve-button">LinkedIn</button></a></div>
        <div><a href="https://angel.co/jasmine-john-2?public_profile=1">
            <button className="reserve-button">AngelList</button></a></div>
      </div>
    )
  }
}

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(null, mdp)(Developer);