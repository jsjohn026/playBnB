export const fetchBookings = () => {
  debugger
  return $.ajax({
    method: "GET",
    url: `/api/bookings`
  })
}

export const fetchBooking = id => {
  debugger
  return $.ajax({
    method: "GET",
    url: `/api/bookings/${id}`
  })
}

export const createBooking = booking => {
  return $.ajax({
    method: "POST",
    url: `/api/bookings`,
    data: { booking }
  })
}