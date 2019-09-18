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
        <li>{listing.num_bedrooms} Bedrooms</li>
        <li>{listing.max_guests} Guests</li>
        <li>{listing.description}</li>
        <li>Rating: {listing.average_rating || "No reviews yet"}</li>
        <li>${listing.price} per night</li>
        { 
          listing.id ? <ListingMap listing={listing}/> : <div></div>
        }
      </ul>
    </div>
  );
};

export default ListingDetail;