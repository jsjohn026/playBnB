import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import listings_reducer from "./listings_reducer";
import bookings_reducer from "./bookings_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer, 
  listings: listings_reducer, 
  bookings: bookings_reducer
});

export default entitiesReducer;
