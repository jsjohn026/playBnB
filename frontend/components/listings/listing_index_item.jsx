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
    const { name, description, price, image_url } = this.props.listing;
    return (
      <div 
        className="listing-index-item"
        onClick={this.handleClick}
      > 
        <div className="index-item-img" style={{backgroundImage: `url("${image_url}")`}}/>
        <div className="index-item-name">{name}</div>
        <div className="index-item-info">
          <span className="index-item-copy">
            <p className="index-item-description">{description}</p>
          </span>
        </div>
        <div className="index-item-info">
          <span className="index-item-copy">
            <span className="index-item-price">${price}/night</span>
          </span>
        </div>
      </div>
    )
  }
}

export default withRouter(ListingIndexItem);