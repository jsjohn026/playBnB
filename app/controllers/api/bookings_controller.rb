class Api::BookingsController < ApplicationController
  before_action :ensure_logged_in

  def index
    @bookings = current_user.bookings
  end
  
  def create
    @booking = Booking.new(booking_params)
    @booking.guest_id = current_user.id
    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end
  
  def show
    @booking = Booking.find(params[:id])
  end
  
  def update
    @booking = Booking.find(params[:id])
    if @booking.update(booking_params)
      render :show
    else
      render json: @bookings.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
  end

  private
  
  def booking_params
    params.require(:booking).permit(:checkin_date, :checkout_date, :num_guests, :listing_id)
  end

end