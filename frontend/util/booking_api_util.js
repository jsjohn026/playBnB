export const fetchBookings = () => {
  return $.ajax({
    method: "GET",
    url: `/api/bookings`
  })
}

export const fetchBooking = id => {
  return $.ajax({
    method: "GET",
    url: `/api/bookings/${id}`
  })
}

export const createBooking = booking => {
  debugger
  return $.ajax({
    method: "POST",
    url: `/api/bookings`,
    data: { booking }
  })
}