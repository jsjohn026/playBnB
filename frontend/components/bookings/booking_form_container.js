import { connect } from "react-redux";
import BookingForm from "./booking_form";
import { createBooking } from "../../actions/booking_actions"; 
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  debugger
  // const bookings = Object.values(state.entities.bookings);
  const bookings = Object.keys(state.entities.bookings).map((id) => {
    return state.entities.bookings[id]
  })
  return {
    // bookings: Object.values(state.entities.bookings),
    bookings,
    listing_id: ownProps.listing.id,
  } 
}

const mapDispatchToProps = dispatch => {
  return {
    createBooking: (booking) => dispatch(createBooking(booking)),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal())
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(BookingForm);