import React from "react";
import { Route } from "react-router-dom";
// import { AuthRoute, ProtectedRoute } from "../util/route_utils";
import NavbarContainer from "./navbar/navbar_container";
import ListingIndexContainer from "./listing_index_container";
import Modal from "./modal/modal";
import ListingShowContainer from "./listing_show/listing_show_container";

const App = () => (
  <div>
    <Modal />
    <NavbarContainer />
    <h3>Explore Playbnb</h3>
    <Route exact path="/" component={ ListingIndexContainer } />
    <Route path="/listings/:listingId" component={ ListingShowContainer } />
  </div>
);

export default App;

//{/* <ProtectedRoute exact path="/listings/new" component={ListingsFormContainer} /> */}
//{/* <AuthRoute exact path="/login" component={LoginFormContainer} />
//<AuthRoute exact path="/signup" component={SignupFormContainer} /> */}