class Api::ListingsController < ApplicationController
  before_action :ensure_logged_in, only: [:create]

  def create
    @listing = Listing.create!(listing_params)
    render :show
  end

  def index
    listings = Listing.all
    if params[:city] && params[:max_guests]
      listings = listings.where(city: city, max_guests: max_guests)
    end
    # @listings = listings.includes(:reviews, :favorite_users)
    render :index
  end

  def show
    @bench = Bench.find(params[:id])
  end

  private
  def listing_params
    params.require(:listing).permit(:name, :host_id, :description, :price, :num_bedrooms, :max_guests, :street_address, :city, :zip_code :lat, :lng)
  end

end