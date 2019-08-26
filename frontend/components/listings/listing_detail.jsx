import React from "react";
import { Link } from "react-router";
import ListingMap from "./listing_map";

const ListingDetail = ({ listing, reviews }) => {
  
  return (
    <div>
      <ul className="listing-attributes">
        <img className="listing-image" src=""/>
        <li>Name: {listing.name}</li>
        <li>Rating: {listing.average_rating || "No reviews yet"}</li>
        <li>Description: {listing.description}</li>
        <li>Capacity: {listing.max_guests}</li>
        <li>Latitude: {listing.lat}</li>
        <li>Longitude: {listing.lng}</li>
        { 
          listing ? <ListingMap listings={[listing]}/> : <div></div>
        }
      </ul>
    </div>
  );
};

export default ListingDetail;