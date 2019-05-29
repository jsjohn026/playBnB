import React from "react";
import ListingIndexItem from "./listing_index_item";

class ListingIndex extends React.Component {
  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    let listings = this.props.listings.map(listing => {
      return (
        <ListingIndexItem
        key={listing.id}
        listing={listing}
        />
      )
    })

    return (
      <div>
        <ul>
          {listings}
        </ul>
      </div>
    )
  }
}

export default ListingIndex;