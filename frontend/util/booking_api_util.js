// export const fetchBookings = () => {
//   return $.ajax({
//     method: "GET",
//     url: `/api/bookings`,
//     error: (err) => console.log(err)
//   })
// }

// export const fetchBooking = id => {
//   return $.ajax({
//     method: "GET",
//     url: `/api/bookings/${id}`,
//     error: (err) => console.log(err)
//   })
// }

export const createBooking = booking => {
  return $.ajax({
    method: "POST",
    url: `/api/bookings`,
    data: booking,
    error: (err) => console.log(err)
  })
}