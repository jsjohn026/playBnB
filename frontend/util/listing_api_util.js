export const fetchListings = () => {
  return $.ajax({
    method: "GET",
    url: "/api/listings",
    error: (err) => console.log(err)
  })
}