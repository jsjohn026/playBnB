import merge from "lodash/merge";
import { 
  RECEIVE_BOOKING, 
  RECEIVE_BOOKINGS
} from "../actions/booking_actions";

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;
      // return merge({}, state, action.bookings);
    case RECEIVE_BOOKING:
      const newBooking = { [action.booking.id]: action.booking };
      return merge({}, state, newBooking);
    default:
      return state;
  }
};

export default bookingsReducer;