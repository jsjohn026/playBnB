import React from "react";
import { withRouter } from "react-router-dom";

class ListingIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const listingId = this.props.listing.id;
    this.props.history.push(`/listings/${listingId}`);
  }

  render() {
    let index = Math.floor(Math.random() * 14);
    let photo = window.photos[index];

    const { name, description, price } = this.props.listing;
    return (
      <div 
        className="listing-index-item"
        onClick={this.handleClick}
      > 
        <div className="index-item-img" style={{backgroundImage: `url("${photo}")`}}/>
        <div className="index-item-name">{name}</div>
        <div className="index-item-info">
          <span className="index-item-copy">
            <p className="index-item-description">{description}</p>
          </span>
        </div>
        <div className="index-item-info">
          <span className="index-item-copy">
            <span className="index-item-price">${price} per night</span>
          </span>
        </div>
      </div>
    )
  }
}

export default withRouter(ListingIndexItem);