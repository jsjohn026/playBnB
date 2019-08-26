
export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(listings) {
    const listingsObj = {};
    listings.forEach(listing => listingsObj[listing.id] = listing);
    // Make a copy of listings: ListingsObj
    
    listings
      .filter(listing => !this.markers[listing.id])
      .forEach(newListing => this.createMarkerFromListing(newListing, this.handleClick))
    // select listings that are not already markers & make markers with them using helper and passing each a click handler

    Object.keys(this.markers)
      .filter(listingId => !listingsObj[listingId])
      .forEach(listingId => this.removeMarker(this.markers[listingId]))
    // select markers that are not in listingsObj (copy of the original input)
  }

  createMarkerFromListing(listing) {
    const position = new google.maps.LatLng
    const marker = {
      // position: 
    }
    this.markers[listing.id] = marker;
    marker.setMap(this.map);
  }
}