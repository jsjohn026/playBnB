class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :name, null: false
      t.string :host_id, null: false
      t.text :description, null: false
      t.integer :price, null: false
      t.integer :num_bedrooms, null: false
      t.integer :max_guests, null: false
      t.string :street_address, null: false
      t.string :city, null: false
      t.string :zip_code, null: false

      t.timestamps
    end
    add_index :listings, :host_id
    add_index :listings, :city
    add_index :listings, :zip_code
  end
end
