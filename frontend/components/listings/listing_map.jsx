import React from "react";
import MarkerManager from "../../util/marker_manager";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
    const lat = this.props.listing.lat;
    const lng = this.props.listing.lng;
    this.mapOptions = {
      // center: { lat: 37.7758, lng: -122.435 },
      center: { lat, lng },
      zoom: 13
    };
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, this.mapOptions);
    this.MarkerManager = new MarkerManager(this.map, null, { markerIcon: {
      path: "M 50 10 A 40 40 0 1 0 50 90 A 40 40 0 1 0 50 10 Z",
      fillColor: "white",
      fillOpacity: 1,
      scale: 0.6,
      strokeColor: "gray",
      labelOrigin: new google.maps.Point(0, -25)
    }});
    this.MarkerManager.updateMarkers([this.props.listing]);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers([this.props.listing]);
  }

  render() {
    return (
      <div className="map-container">
        <div id="map" ref={ map => this.mapNode = map }>
          Map
        </div>
      </div>
    )  
  }
}

export default ListingMap;