import React from "react";
import { withRouter } from "react-router-dom";
import ListingIndexContainer from "./listing_index_container";

class ListingIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const listingId = this.props.listing.id;
    // this.props.history.push(`/listings/${listingId}`);
    this.props.fetchListing(listingId);
  }

  render() {
    const { name, description, price } = this.props.listing;
    return (
      <div 
        className="listing-index-item"
        onClick={this.handleClick}
      > 
        <h3 className="index-item-name">{name}</h3>
        <div className="index-item-info">
          <span className="index-item-category">
           <p className="index-item-copy">{description}</p>
          </span>
        </div>
        <div className="index-item-info">
          <span className="index-item-category">
            <span className="index-item-copy">${price} per night</span>
          </span>
        </div>
      </div>
    )
  }
}

export default withRouter(ListingIndexItem);