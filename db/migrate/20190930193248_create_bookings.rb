class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :listing_id, null: false
      t.integer :guest_id, null: false
      t.date :checkin_date, null: false
      t.date :checkout_date, null: false
      t.date :num_guests, null: false

      t.timestamps
    end

    add_index :bookings, :listing_id
    add_index :bookings, :guest_id
  end
end
