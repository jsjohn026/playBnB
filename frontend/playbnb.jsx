import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./components/root";
import configureStore from './store/store';
import { fetchListings } from "./actions/listing_actions";
import { createBooking } from "./util/booking_api_util";

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    // delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.fetchListings = fetchListings;

  window.createBooking = createBooking;
  window.booking = {
    booking: {
    listing_id: 1, 
    checkin_date: '2020-02-02', 
    checkout_date: '2020-02-08', 
    num_guests: 2
    }
  };

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});