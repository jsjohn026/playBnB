import React from "react";
import { Link } from "react-router";
import ListingMap from "./listing_map";

const ListingDetail = ({ listing, reviews }) => {
  return (
    <div className="listing-details">
      <h3 className="listing-name">{listing.name}
        <p className="listing-city">{listing.city}</p>
      </h3>

      
      <ul className="listing-attributes">
        <div className="listing-accomodations">
          <p>{listing.max_guests} Guests</p>
          <p>{listing.num_bedrooms} Bedrooms</p>
          <p>{listing.num_bathrooms} Bathrooms</p>
        </div>
        <li><div className="attribute-heading"><i class="fas fa-home"></i> Entire home</div>
        You'll have the entire house to yourself</li>
        <li>{listing.description}</li>
        { 
          listing.id ? <ListingMap listing={listing}/> : <div></div>
        }
      </ul>
    </div>
  );
};

export default ListingDetail;