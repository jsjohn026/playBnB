import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  
  const sessionLinks = () => {
    return(
    <nav className="login-signup">
      <Link to="/login">Login</Link><br/>
      <Link to="/signup">Sign up!</Link>
    </nav>
    )
  };
  const personalGreeting = () => {
    return(
      <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.fname}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
    ) 
  }
  
  return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;