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
        <div className="listing-accommodations">
          <p>{listing.max_guests} Guests</p>
          <p>{listing.num_bedrooms} Bedrooms</p>
          <p>{listing.num_bathrooms} Bathrooms</p>
        </div>

        <div className="attribute-section">
          <li>
            <div className="attribute-heading">
              <i className="fas fa-home"></i>
              <div>
                <p>Entire home</p>
                <p className="attribute-descriptor">You'll have the entire house to yourself</p>
              </div>
            </div>
          </li>
          <li>
            <div className="attribute-heading">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <p>Great location</p>
                <p className="attribute-descriptor">90% of recent guests gave the location a 5-star rating.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="attribute-heading">
              <i className="fas fa-unlock-alt"></i>
              <div>
                <p>Self check-in</p>
                <p className="attribute-descriptor">Check yourself in with the keypad.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="attribute-heading">
              <i className="fas fa-key"></i>
              <div>
                <p>Great check-in experience</p>
                <p className="attribute-descriptor">100% of recent guests gave the check-in process a 5-star rating.</p>
              </div>
            </div>
          </li>
        </div>
        <div className="listing-description">
          {listing.description}
          <section className="description-filler">
            <div>Enjoy a relaxing stay in the Bay.
            This peaceful space provides a place to relax, cook, and enjoy a glass of wine on the patio.</div>
            
            <div>Minutes away from some of the best food and amenities in the Bay Area.
            This cozy spot won't disappoint.</div>

            <div><p className="description-subheading">The space</p>This darling cottage-like casita is located on the heart of the peninsula offering easy access to some of the Bay Areas most desirable tourist attractions and professional companies.</div>

            <div>Some of the best restaurants, hiking, and biking are minutes from our home.</div>
            
            <div><p className="description-subheading">Other things to note</p>You can also take an easy commute less than 30 minutes to San Francisco or San Jose via CalTrain or car. This is the perfect location for someone who doesn't want to stay in the foggy city, and appreciates all the Bay Area has to offer!</div>
          </section>
        </div>
        <div className="amenities-section">Amenities
          <ul className="amenities-list">
            <div className="amenities-column">
              <li><i class="fas fa-wifi"></i>Wifi</li>
              <li><i class="fas fa-laptop"></i>Laptop friendly workspace</li>
              <li><i class="fas fa-utensils"></i>Kitchen</li>
            </div>
            <div className="amenities-column">
              <li><i class="fas fa-thermometer-half"></i>Heating</li>
              <li><i class="fas fa-coffee"></i>Coffee</li>
              <li><i class="fas fa-tv"></i>Cable TV</li>
            </div>
          </ul>
        </div>
        <div className="listing-map">
          {
            listing.id ? <ListingMap listing={listing} /> : <div></div>
          }
        </div>
      </ul>
    </div>
  );
};

export default ListingDetail;