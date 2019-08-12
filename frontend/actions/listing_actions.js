import * as APIUtil from "../util/listing_api_util";

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";


export const receiveListings = (listings) => {
  return {
    type: RECEIVE_LISTINGS,
    listings 
  }
}

export const receiveListing = ({ listing }) => {
  return {
    type: RECEIVE_LISTING,
    listing
  }
}

export const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review
  }
}

export const fetchListings = () => dispatch => (
  APIUtil.fetchListings().then(listings => (
    dispatch(receiveListings(listings))
  ))
)

export const fetchListing = id => dispatch => (
  APIUtil.fetchListing(id).then(listing => (
    dispatch(receiveListing(listing))
  ))
)