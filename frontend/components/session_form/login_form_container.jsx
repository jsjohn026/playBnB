import { connect } from "react-redux";
import React from "react";
import { login } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => {
  let errors = state.errors.session;

  return {
    errors: errors,
    user: { email: "", password: "" },
    formType: "login",
  }
}

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <div onClick={() => dispatch(openModal("signup"))}>
        Sign Up instead
      </div>
    ), 
    closeModal: () => dispatch(closeModal())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);