import React from "react";

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };
  }

  render() {
    return (
      <div className="map-container" ref="map">

      </div>
    )  
  }
}