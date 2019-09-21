import React from "react";

const PhotoGrid = ({ listing }) => {
  return (
    <div className="listing-image-row">
      <div className="listing-image-column-a">
        <img className="listing-image-main" src={listing.image_url} />
      </div>
      <div className="listing-image-column-b">
        <img className="listing-image-small" src={listing.image_url} />
        <img className="listing-image-small" src={listing.image_url} />
      </div>
      <div className="listing-image-column-c">
        <img className="listing-image-small" src={listing.image_url} />
        <img className="listing-image-small" src={listing.image_url} />
      </div>
    </div>
  )
}

export default PhotoGrid;