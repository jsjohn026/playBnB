# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Listing.destroy_all

puts "creating users..."
users = User.create([
  {email: 'beyonce@beyonce.com', fname: 'Beyonce', lname: 'Knowles', password: 'password'},
  {email: 'madonna@madonna.com', fname: 'Madonna', lname: 'Ciccone', password: 'password'}, 
  {email: 'willsmith@freshprince.com', fname: 'Will', lname: 'Smith', password: 'password'}, 
  {email: 'rexi@rexi.com', fname: 'Rexi', lname: 'John', password: 'password'}
])

puts "creating listings...."
listings = Listing.create([
  {name:'Treetop Oasis' , host_id: '1' , description: 'A quiet lofty spot to rest your tired wings', price: 45, num_bedrooms: 3, max_guests: 4, street_address: '1234 Sesame Street', city: 'San Francisco' , zip_code: '94143' , lat: 37.766432 , lng: -122.393623 }, 
  {name:'Fishermans Paradise' , host_id: '2' , description: 'A lovely dockside patch to fish for a while.', price: 5, num_bedrooms: 1, max_guests: 1, street_address: '4321 Freshbait Road', city: 'San Francisco' , zip_code: '94064' , lat: 37.776665 , lng: -122.448916 }, 
  {name:'Dogpatch Doghouse' , host_id: '3' , description: 'Breezy one room with plenty of water and jerky', price: 18, num_bedrooms: 1, max_guests: 1, street_address: '4343 Doggo Drive', city: 'San Francisco' , zip_code: '94124' , lat: 37.745171 , lng: -122.434866 }, 
  {name:'Firehouse Fort' , host_id: '4' , description: 'Views of the bay far and wide', price: 200, num_bedrooms: 4, max_guests: 8, street_address: '2397 Fiero Lane', city: 'San Francisco' , zip_code: '94104' , lat: 37.762246 , lng: -122.401540 }, 
  {name:'Harbor Rafts' , host_id: '1' , description: 'Serene floating paradise to lay out in the sun', price: 110, num_bedrooms: 4, max_guests: 4, street_address: '9988 Ocean Avenue', city: 'San Francisco' , zip_code: '94133' , lat: 37.762836 , lng: -122.500430 }, 
  {name:'Sandwich Alley' , host_id: '3' , description: 'A peaceful alley to rest your feet and sniff sandwiches', price: 67, num_bedrooms: 2, max_guests: 2, street_address: '1600 Pennsylvania Ave', city: 'San Francisco' , zip_code: '94117' , lat: 37.784532 , lng: -122.438261 }
])

# {name:'Test Home' , host_id: '2' , description: 'this is to test in the window', price: 56, num_bedrooms: 2, max_guests: 2, street_address: '1007 Spy Blvd', city: 'San Francisco' , zip_code: '94117' , lat: 37.784534 , lng: -122.438230 }