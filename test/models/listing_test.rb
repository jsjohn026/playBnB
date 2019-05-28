# == Schema Information
#
# Table name: listings
#
#  id             :bigint           not null, primary key
#  name           :string           not null
#  host_id        :string           not null
#  description    :text             not null
#  price          :integer          not null
#  num_bedrooms   :integer          not null
#  max_guests     :integer          not null
#  street_address :string           not null
#  city           :string           not null
#  zip_code       :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  lat            :float            not null
#  lng            :float            not null
#

require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
