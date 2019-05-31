json.listing do
  json.partial! '/api/listings/listing', listing: @listing
  json.reviewIds @listing.reviews.pluck(:id)
end