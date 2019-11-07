import React from "react";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newBooking = {
      
    }

    // const user = Object.assign({}, this.state);
    // this.props.processForm(user).then(this.props.closeModal);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    const listing = this.props.listing;

    return (
      <div className="booking-form">
        <div className="booking-form-header">
          <p><span className="listing-price">${listing.price}</span> per night</p>
          <p className="booking-rating">
            <i className="fas fa-star"></i>
            {listing.average_rating || "No reviews yet"}
          </p>
        </div>

        <form 
          action=""
          onSubmit = {this.handleSubmit}
        >
          <p className="booking-form-dates">Dates
            <span className="date-row">
              <input type="date" name="date" id="" />
              <input type="date" name="date" id="" />
            </span>
          </p>

          <p className="guest-dropdown">Guests</p>
          <select className="guest-dropdown-options" name="guests" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <button className="reserve-button" type="submit">Reserve</button>
          <div className="reserve-button-note">
            <p>You won’t be charged yet</p>
            A small number of reservations may include a Playbnb-required security deposit.</div>
        </form>
      </div>
    )
  }
}

export default BookingForm;