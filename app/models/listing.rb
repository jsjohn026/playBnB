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

class Listing < ApplicationRecord
  validates :name, :description, :lat, :lng, presence: true

  belongs_to :host, 
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User


end
