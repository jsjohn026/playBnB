export const fetchListings = () => {
  return $.ajax({
    method: "GET",
    url: `/api/listings`,
    error: (err) => console.log(err)
  })
}

export const fetchListing = id => {
  return $.ajax({
    method: "GET",
    url: `/api/listings/${id}`,
    error: (err) => console.log(err)
  })
}