import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">Back to Listings Home</Link>
        {/* <ListingMap */}
          {/* listings={listings}
          listingId={listingId}
          listing={true}
          fetchListing={fetchListing}
          /> */}
      </div>
      <div className="listing-details">
        <ListingDetail listing={listing} />
        {/* <ProtectedRoute
          path="/listings/:listingId/review"
          
          /> */}
      </div>
    </div>
    );
  }
}

export default ListingShow;