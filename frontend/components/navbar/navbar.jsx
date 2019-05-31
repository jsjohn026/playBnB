import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ currentUser, logout }) => {
  
  const sessionAuthLinks = () => {
    return(
    <header className="header">
      <nav className="header-nav">
        <img className="header-logo"/>
        <ul className="header-list">
          <li><a href="#">Become a host</a></li>
          <li><a href="#">Help</a></li>
          <li><Link to="/signup">Sign up</Link></li>
          <li><Link to="/login">Log In</Link></li>
        </ul>
      </nav>
    </header>
    );
  };

  const sessionProtectedLinks = () => {
    return(
    <header className="header">
      <nav className="header-nav">
        <img className="header-logo"/>
        <ul className="header-list">
          <li><a href="#">Become a host</a></li>
          <li><a href="#">Saved</a></li>
          <li><a href="#">Trips</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">Help</a></li>
        </ul>
        <hgroup className="header-group">
          <h2 className="header-name">Hi, {currentUser.fname}!</h2>
          <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
      </nav>
    </header>
    );
  };
  
  return currentUser ? sessionProtectedLinks() : sessionAuthLinks();
}

export default Navbar;