import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import Navbar from "./navbar";

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    // currentUser: users[session.id]
    currentUser: session.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => (dispatch(logout())), 
    openModal: modal => dispatch(openModal(modal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);