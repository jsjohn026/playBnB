import React from "react";
import ListingDetail from "./listing_detail";
import { ProtectedRoute } from "../../../util/route_utils";
import BookingFormContainer from "../../bookings/booking_form_container";
import PhotoGrid from "./photo_grid";

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.fetchListing(this.props.listingId);
  }

  render() {
    const listing = this.props.listing;
    return (
      <div className="listing-show">
        <PhotoGrid listing={listing} />
        <div className="listing-show-main-content">
          <ListingDetail listing={listing} />
          <BookingFormContainer listing={listing}/>
        </div>
      </div>
    );
  }
}

export default ListingShow;