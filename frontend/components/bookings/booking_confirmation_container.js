import { connect } from "react-redux";
import { createBooking } from "../../actions/booking_actions";
import { closeModal } from "../../actions/modal_actions";
import BookingModal from "./booking_modal";

const msp = (state, ownProps) => {
  return {
    bookingData: state.ui.bookingData,
    currentUserId: state.session.id, 
    formType: 'booking confirmation'
  }
}

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    processForm: booking => dispatch(createBooking(booking))
  }
}

export default connect(msp, mdp)(BookingModal)