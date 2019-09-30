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

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
