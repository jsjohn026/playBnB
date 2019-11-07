import { connect } from "react-redux";
import BookingForm from "./booking_form";

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    booking: { 
      listing_id: ownProps.listing.id,  
      checkin_date: null,  
      checkout_date: null,  
      num_guests: 1 }
  } 
}

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(BookingForm);