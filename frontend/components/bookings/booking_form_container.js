import { connect } from "react-redux";
import BookingForm from "./booking_form";
import { createBooking } from "../../actions/booking_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    bookings: Object.values(state.entities.bookings),
    listing_id: ownProps.listing.id,
  } 
}

const mapDispatchToProps = dispatch => {
  return {
    createBooking: (booking) => dispatch(createBooking(booking)),
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(BookingForm);