# == Schema Information
#
# Table name: bookings
#
#  id            :bigint           not null, primary key
#  listing_id    :integer          not null
#  guest_id      :integer          not null
#  checkin_date  :date             not null
#  checkout_date :date             not null
#  num_guests    :date             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Booking < ApplicationRecord
  validates :listing_id, :guest_id, :checkin_date, :checkout_date, :num_guests, presence: true

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

end
