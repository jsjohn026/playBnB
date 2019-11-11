import { connect } from "react-redux";
import BookingForm from "./booking_form";
import { createBooking } from "../../actions/booking_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    booking: { 
      listing_id: ownProps.listing.id,  
      checkin_date: null,  
      checkout_date: null,  
      num_guests: 1 
    }
  } 
}

const mapDispatchToProps = dispatch => {
  return {
    createBooking: (booking) => dispatch(createBooking(booking)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(BookingForm);