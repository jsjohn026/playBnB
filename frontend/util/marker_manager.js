
export default class MarkerManager {
  constructor(map, handleClick, options={}) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
    this.options = options;
  }

  updateMarkers(listings) {
    const listingsObj = {};
    listings.forEach(listing => listingsObj[listing.id] = listing);
    // Convert listings array into an object
    
    listings
      .filter(listing => !this.markers[listing.id])
      .forEach(newListing => this.createMarkerFromListing(newListing, this.handleClick))
    // select listings that are not already markers & make them into markers using helper and passing each a click handler

    Object.keys(this.markers)
      .filter(listingId => !listingsObj[listingId])
      .forEach(listingId => this.removeMarker(this.markers[listingId]))
    // select markers that are not in listingsObj & removes them from markers 
  }

  createMarkerFromListing(listing) {
    const position = new google.maps.LatLng(listing.lat, listing.lng);
    const markerLabel = {
      text: `$${listing.price}`, 
      fontWeight: "800",
      fontSize: "12px"
    }

    const markerIcon = this.options.markerIcon || {
      path: "M22-48h-44v43h16l6 5 6-5h16z", 
      fillColor: "white", 
      fillOpacity: 1, 
      scale: 0.6,
      strokeColor: "gray", 
      labelOrigin: new google.maps.Point(0, -25)
    }

    const marker = new google.maps.Marker({
      position, 
      map: this.map, 
      listingId: listing.id,
      label: markerLabel, 
      icon: markerIcon
    });
    
    marker.addListener('click', () => this.handleClick(listing, marker));
    this.markers[marker.listingId] = marker;
  
  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }
}