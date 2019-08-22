import React from "react";
import MarkerManager from "../../util/marker_manager";

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
    this.mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };

  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, this.mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
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