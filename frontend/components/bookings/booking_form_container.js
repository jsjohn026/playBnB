import { connect } from "react-redux";
import BookingForm from "./booking_form";

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors
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