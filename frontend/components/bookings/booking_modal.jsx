import React from "react";

class BookingModal extends React.Component {
  constructor(props) {
    super(props);
    this.bookingData = {
      // checkin_date: this.props.bookingData.checkin_date,
      // checkout_date: this.props.bookingData.checkout_date,
      // listing_id: this.props.bookingData.listing_id,
      // num_guests: this.props.bookingData.num_guests
    } 
  }

  render() {
    return (
      <div className="login-form-box">
        <div onClick={this.props.closeModal} className="close-x">X</div>
        <div>modal is working bro!</div>
        <button>MODAL BUTTON BRO</button>
      </div>
    )
  }
}

export default BookingModal;