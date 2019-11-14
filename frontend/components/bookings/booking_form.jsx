import React from "react";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkin_date: "",
      checkout_date: "",
      num_guests: 1
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const booking = Object.assign( {}, this.state, {
      listing_id: this.props.listing_id,
    })
    this.props.createBooking(booking);
  }

  update(field) {
    return e => {
      if (field === "num_guests") {
        this.setState({ [field]: parseInt(e.currentTarget.value) })
      } else {
        this.setState({ [field]: e.currentTarget.value });
      }
    }
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
              <input 
                type="date" 
                onChange={this.update("checkin_date")}
                value={this.state.checkin_date}
                />
              <input 
                type="date" 
                onChange={this.update("checkout_date")}
                value={this.state.checkout_date}
               />
            </span>
          </p>

          <p className="guest-dropdown">Guests</p>
          <select 
            className = "guest-dropdown-options" 
            onChange = {this.update("num_guests")}
            value = {this.state.num_guests}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
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