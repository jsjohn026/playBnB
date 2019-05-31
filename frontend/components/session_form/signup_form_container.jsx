import { connect } from "react-redux";
import React from "react";
import { signup, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => {
  let errors = state.errors.session;

  return {
    errors: errors,
    user: { fname: "", lname: "", email: "", password: "" },
    formType: "signup",
  }
}

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)), 
    otherForm: (
      <div onClick={() => dispatch(openModal("login"))}>
        Log In instead
      </div>
    ),
    closeModal: () => dispatch(closeModal()), 
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);