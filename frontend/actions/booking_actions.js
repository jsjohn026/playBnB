import * as APIUtil from "../util/booking_api_util";

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';

export const receiveBookings = bookings => {
  return {
    type: RECEIVE_BOOKINGS, 
    bookings
  }
}

export const receiveBooking = booking => {
  return {
    type: RECEIVE_BOOKING, 
    booking
  }
}

export const fetchBookings = () => dispatch => (
  APIUtil.fetchBookings().then(bookings => (
    dispatch(receiveBookings(bookings))
  ))
)

export const createBooking = booking => dispatch => (
  APIUtil.createBooking(booking).then(booking => (
    dispatch(receiveBooking(booking))
  ))
)