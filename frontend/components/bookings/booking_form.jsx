import React from "react";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const listing = this.props.listing;

    return (
      <div className="booking-form">
        <div className="booking-form-header">
          <p><span className="listing-price">${listing.price}</span> per night</p>
          <p className="booking-rating">{listing.average_rating || "No reviews yet"}</p>
        </div>

        <form action="">Booking Reservation
          <label htmlFor=""> Start Date</label>
          <input type="date" name="date" id=""/>
          <label htmlFor="">End Date</label>
          <input type="date" name="date" id=""/>
          <select name="guests" id="">Number of Guests:
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <button className="reserve-button" type="submit">Reserve</button>
        </form>
      </div>
    )
  }
}

export default BookingForm;