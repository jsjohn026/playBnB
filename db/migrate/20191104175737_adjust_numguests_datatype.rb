class AdjustNumguestsDatatype < ActiveRecord::Migration[5.2]
  def up
    remove_column :bookings, :num_guests
  end
  
  def down
    add_column :bookings, :num_guests, :integer
  end
end
