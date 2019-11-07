# == Schema Information
#
# Table name: bookings
#
#  id            :bigint           not null, primary key
#  listing_id    :integer          not null
#  guest_id      :integer          not null
#  checkin_date  :date             not null
#  checkout_date :date             not null
#  num_guests    :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Booking < ApplicationRecord
  validates :listing_id, :guest_id, :checkin_date, :checkout_date, :num_guests, presence: true

  validate :booking_conflicts, :valid_booking

  belongs_to :listing, 
    primary_key: :id, 
    foreign_key: :listing_id, 
    class_name: :Listing

  belongs_to :guest, 
    primary_key: :id, 
    foreign_key: :guest_id, 
    class_name: :User

  has_one :host, 
    through: :listing, 
    source: :host

  def booking_conflicts
    bookings = Booking
      .where.not(id: self.id)
      .where(listing_id: listing_id)
      .where.not("checkin_date > :checkout_date OR 
        checkout_date < :checkin_date", 
        checkin_date: checkin_date, checkout_date: checkout_date)
    
    unless bookings.empty?
      errors[:booking] << "This listing is not available for the selected dates"
    end
  end
    
  def valid_booking
    if :checkin_date > :checkout_date
      errors[:booking] << "Check in must be before Check out date"
    end
  end

end
