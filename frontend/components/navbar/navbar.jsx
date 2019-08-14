import React from "react";

const Navbar = ({ currentUser, logout, openModal }) => {
  
  const nonUserLinks = () => {
    return(
    <header className="header">
      <nav className="header-nav">
        <div className="header-logo"/>
        <ul className="header-list">
          <li><a href="#">Become a host</a></li>
          <li><a href="#">Help</a></li>
          <li><button 
            onClick={() => openModal("signup")} 
            className="login-signup">Sign Up</button></li>
          <li><button 
            onClick={() => openModal("login")} 
            className="login-signup">Log In</button></li>
        </ul>
      </nav>
    </header>
    );
  };

  const userLinks = () => {
    return(
    <header className="header">
      <nav className="header-nav">
        <div className="header-logo"/>
        <ul className="header-list">
          <li><a href="#">Become a host</a></li>
          <li><a href="#">Saved</a></li>
          <li><a href="#">Trips</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">Help</a></li>
          <li>
          <hgroup className="header-group">
            <div className="header-name">Hi, {currentUser.fname}!</div>
            <button className="header-button" onClick={logout}>Log Out</button>
          </hgroup>
          </li>
        </ul>
      </nav>
    </header>
    );
  };
  
  return currentUser ? userLinks() : nonUserLinks();
}

export default Navbar;