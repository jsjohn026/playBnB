import React from "react";
import { Link } from "react-router";
import ListingMap from "./listing_map";

const ListingDetail = ({ listing, reviews }) => {
  return (
    <div className="listing-details">
      <h3>{listing.name}
        <p>{listing.city}</p>
      </h3>
      <ul className="listing-attributes">
        <li>{listing.num_bedrooms} Bedrooms</li>
        <li>{listing.max_guests} Guests</li>
        <li>{listing.description}</li>
        { 
          listing.id ? <ListingMap listing={listing}/> : <div></div>
        }
      </ul>
    </div>
  );
};

export default ListingDetail;