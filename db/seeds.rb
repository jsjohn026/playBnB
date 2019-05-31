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
  {name:'Treetop Oasis', host_id: '1', description: 'A quiet lofty spot to rest your tired wings', price: 45, num_bedrooms: 3, max_guests: 4, street_address: '1234 Sesame Street', city: 'San Francisco', zip_code: '94143', lat: 37.766432 , lng: -122.393623 }, 

  {name:'Fishermans Paradise', host_id: '2', description: 'A lovely dockside patch to fish for a while.', price: 5, num_bedrooms: 1, max_guests: 1, street_address: '4321 Freshbait Road', city: 'San Francisco', zip_code: '94064', lat: 37.776665 , lng: -122.448916 }, 

  {name:'Dogpatch Doghouse', host_id: '3', description: 'Breezy one room with plenty of water and jerky', price: 18, num_bedrooms: 1, max_guests: 1, street_address: '4343 Doggo Drive', city: 'San Francisco', zip_code: '94124', lat: 37.745171 , lng: -122.434866 }, 

  {name:'Firehouse Fort', host_id: '4', description: 'Views of the bay far and wide', price: 200, num_bedrooms: 4, max_guests: 8, street_address: '2397 Fiero Lane', city: 'San Francisco', zip_code: '94104', lat: 37.762246 , lng: -122.401540 }, 
  
  {name:'Harbor Rafts', host_id: '1', description: 'Serene floating paradise to lay out in the sun', price: 110, num_bedrooms: 4, max_guests: 4, street_address: '9988 Ocean Avenue', city: 'San Francisco', zip_code: '94133', lat: 37.762836 , lng: -122.500430 }, 
  
  {name:'Sandwich Alley', host_id: '3', description: 'A peaceful alley to rest your feet and sniff sandwiches', price: 67, num_bedrooms: 2, max_guests: 2, street_address: '1600 Pennsylvania Ave', city: 'San Francisco', zip_code: '94117', lat: 37.784532 , lng: -122.438261 },
  
  {name:'Bay Bridge Bunker', host_id: '4', description: 'Waterside beds and serene cave sounds under the bridge', price: 42, num_bedrooms: 2, max_guests: 2, street_address: '200 Baystreet', city: 'San Francisco', zip_code: '94103', lat: 37.784529, lng: -122.438268 },
  
  {name:'Victor Victorian', host_id: '3', description: 'Charming Victorian home high on a hill with sweeping views, a garden, and a deck', price: 42, num_bedrooms: 1, max_guests: 2, street_address: '34 Beacon Street', city: 'San Francisco', zip_code: '94131', lat: 37.741331, lng: -122.432154 },
  
  {name:'Treat Street Bunk', host_id: '4', description: 'Stick with the rest of the pack in a bunk in a shared space', price: 59, num_bedrooms: 1, max_guests: 1, street_address: '2407 Treat Street', city: 'San Francisco', zip_code: '94110', lat: 37.758547, lng: -122.412341 },
  
  { name:'Sunny Lofty Living', host_id: '4', description: 'A sunny living room in a loft with great views of the city', price: 55, num_bedrooms: 1, max_guests: 2, street_address: '3901 18th Street', city: 'San Francisco', zip_code: '94114', lat: 37.761133, lng: -122.431876 },
  {name:'Treetop Perch', host_id: '1', description: 'A quiet lofty spot to rest your tired wings', price: 45, num_bedrooms: 3, max_guests: 4, street_address: '1233 Sesame Street', city: 'San Francisco', zip_code: '94143', lat: 37.766431 , lng: -122.393623 }, 

  {name:'Fishermans Wharf', host_id: '2', description: 'A lovely dockside patch to fish for a while.', price: 5, num_bedrooms: 1, max_guests: 1, street_address: '4320 Freshbait Road', city: 'San Francisco', zip_code: '94064', lat: 37.776664 , lng: -122.448916 }, 

  {name:'Dogpatch Park', host_id: '3', description: 'Breezy one room with plenty of water and jerky', price: 18, num_bedrooms: 1, max_guests: 1, street_address: '4342 Doggo Drive', city: 'San Francisco', zip_code: '94124', lat: 37.745170 , lng: -122.434866 }, 

  {name:'Firehouse Space', host_id: '4', description: 'Views of the bay far and wide', price: 200, num_bedrooms: 4, max_guests: 8, street_address: '2396 Fiero Lane', city: 'San Francisco', zip_code: '94104', lat: 37.762245 , lng: -122.401540 }, 
  
  {name:'Harbor Pier ', host_id: '1', description: 'Serene floating paradise to lay out in the sun', price: 110, num_bedrooms: 4, max_guests: 4, street_address: '9987 Ocean Avenue', city: 'San Francisco', zip_code: '94133', lat: 37.762835 , lng: -122.500430 }, 
  
  {name:'Pizza Alley', host_id: '3', description: 'A peaceful alley to rest your feet and sniff pizza', price: 67, num_bedrooms: 2, max_guests: 2, street_address: '1500 Pennsylvania Ave', city: 'San Francisco', zip_code: '94117', lat: 37.784531 , lng: -122.438261 },
  
  {name:'Bay Bridge Bulkhead', host_id: '4', description: 'Waterside beds and serene cave sounds under the bridge', price: 42, num_bedrooms: 2, max_guests: 2, street_address: '198 Baystreet', city: 'San Francisco', zip_code: '94103', lat: 37.784528, lng: -122.438268 },
  
  {name:'Victor Victorious', host_id: '3', description: 'Charming Victorian home high on a hill with sweeping views, a garden, and a deck', price: 42, num_bedrooms: 1, max_guests: 2, street_address: '33 Beacon Street', city: 'San Francisco', zip_code: '94131', lat: 37.74133, lng: -122.432154 },
  
  {name:'Treat Street Couch', host_id: '4', description: 'Stick with the rest of the pack in a bunk in a shared space', price: 59, num_bedrooms: 1, max_guests: 1, street_address: '2406 Treat Street', city: 'San Francisco', zip_code: '94110', lat: 37.758567, lng: -122.412341 },
  
  { name:'Sunny Lofty Breezes', host_id: '4', description: 'A sunny living room in a loft with great views of the city', price: 55, num_bedrooms: 1, max_guests: 2, street_address: '3902 18th Street', city: 'San Francisco', zip_code: '94114', lat: 37.761134, lng: -122.431876 },
])

# {name:'Test Home' , host_id: '2', description: 'this is to test in the window', price: 56, num_bedrooms: 2, max_guests: 2, street_address: '1007 Spy Blvd', city: 'San Francisco' , zip_code: '94117' , lat: 37.784534 , lng: -122.438230 }