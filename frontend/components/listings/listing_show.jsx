import React from "react";
import ListingDetail from "./listing_detail";
import { ProtectedRoute } from "../../util/route_utils";

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
        <div className="listing-map">
        </div>
        <div className="listing-details">
          <ListingDetail listing={listing} />
        </div>
      </div>
    );
  }
}

export default ListingShow;