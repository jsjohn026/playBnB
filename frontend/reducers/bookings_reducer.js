import merge from "lodash/merge";
import { 
  RECEIVE_BOOKING
} from "../actions/booking_actions";

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BOOKING:
      
    default:
      return state;
  }
}

export default bookingsReducer;