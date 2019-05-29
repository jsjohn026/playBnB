import React from "react";
import { Route } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_utils";
import NavbarContainer from "./navbar/navbar_container";
import ListingIndexContainer from "./listing_index_container";

const App = () => (
  <div>
    <NavbarContainer />
    <h3>Explore Playbnb</h3>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={ ListingIndexContainer } />
  </div>
);

export default App;

//{/* <ProtectedRoute exact path="/listings/new" component={ListingsFormContainer} /> */}