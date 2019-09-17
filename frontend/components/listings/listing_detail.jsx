import React from "react";
import { Link } from "react-router";
import ListingMap from "./listing_map";

const ListingDetail = ({ listing, reviews }) => {
  return (
    <div>
      <div className="listing-image-row">
        <div className="listing-image-column-a">
          <img className="listing-image-main" src={listing.image_url}/>
        </div>
        <div className="listing-image-column-b">
          <img className="listing-image-small" src={listing.image_url}/>
          <img className="listing-image-small" src={listing.image_url}/>
        </div>
        <div className="listing-image-column-b">
          <img className="listing-image-small" src={listing.image_url}/>
          <img className="listing-image-small" src={listing.image_url}/>
        </div>
      </div>
      <h3>{listing.name}
        <p>{listing.city}</p>
      </h3>
      <ul className="listing-attributes">
        <li>Rating: {listing.average_rating || "No reviews yet"}</li>
        <li>Description: {listing.description}</li>
        <li>Bedrooms: {listing.num_bedrooms}</li>
        <li>Capacity: {listing.max_guests}</li>
        <li>${listing.price} per night</li>
        { 
          listing.id ? <ListingMap listing={listing}/> : <div></div>
        }
      </ul>
    </div>
  );
};

export default ListingDetail;