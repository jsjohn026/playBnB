import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.openModal("developer")
  };

  render() {
    const { currentUser, logout, openModal } = this.props

    const nonUserLinks = (
      <header className="header">
        <nav className="header-nav">
          <div className="header-logo">
            <Link to="/"></Link>
          </div>
          <div className="header-list">
            <a href="#" onClick={this.handleClick}>Become a host</a>
            <a href="#" onClick={this.handleClick}>Help</a>
            <button 
              onClick={() => openModal("signup")} 
              className="login-signup">Sign Up</button>
            <button 
              onClick={() => openModal("login")} 
              className="login-signup">Log In</button>
          </div>
        </nav>
      </header>
    );

    const firstName = currentUser ? currentUser.fname : null;

    const userDropdown = (
      <div id="dropdown" className="user-dropdown">
        <button className="user-icon">{firstName}</button>
        <div className="user-dropdown-content">
          <a>Hi, {firstName}!</a>
          <a onClick={this.handleClick}>Reservations</a>
          <a className="header-button" onClick={logout}>
          Log Out</a>
        </div>
      </div>
    );
  
    const fName = firstName ? firstName : null;
    const userLinks = (
      <header className="header">
        <nav className="header-nav">
          <div className="header-logo">
            <Link to="/"></Link>
          </div>
          <div className="header-list">
            <a onClick={this.handleClick}>Become a host</a>
            <a onClick={this.handleClick}>Saved</a>
            <a onClick={this.handleClick}>Trips</a>
            <a onClick={this.handleClick}>Messages</a>
            <a onClick={this.handleClick}>Help</a>
            {userDropdown}
          </div>
        </nav>
      </header>
    );
  
  return currentUser ? userLinks : nonUserLinks;
  };
}

export default Navbar;