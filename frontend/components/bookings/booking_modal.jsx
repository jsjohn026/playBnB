import React from "react";
import { Link } from "react-router-dom";

class BookingModal extends React.Component {
  constructor(props) {
    super(props);
    this.bookingData = {
      // checkin_date: this.props.bookingData.checkin_date,
      // checkout_date: this.props.bookingData.checkout_date,
      // listing_id: this.props.bookingData.listing_id,
      // num_guests: this.props.bookingData.num_guests
    } 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRedirect() {
    return (
      location.href = "#"
    )
  } 
  
  handleSubmit() {
    this.handleRedirect();
    this.props.closeModal();
  }

  render() {
    return (
      <div className="login-form-box">
        <div onClick={this.props.closeModal} className="close-x">X</div>
        <div>Booking Confirmed</div>
        <button onClick={this.handleSubmit} className="reserve-button">RETURN TO LISTINGS
        </button>
      </div>
    )
  }
}

export default BookingModal;