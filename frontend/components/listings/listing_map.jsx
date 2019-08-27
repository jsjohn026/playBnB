import React from "react";
import MarkerManager from "../../util/marker_manager";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
    const lat = this.props.lat;
    const lng = this.props.lng;
    this.mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, this.mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.listing);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listing);
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