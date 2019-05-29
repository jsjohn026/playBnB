import { connect } from "react-redux";
import ListingIndex from "./listing_index";
import { fetchListings } from "../actions/listing_actions";

const mapStateToProps = state => {
  let listings = Object.values(state.entities.listings);
  return ({
    listings: listings
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchListings: () => dispatch(fetchListings())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingIndex);