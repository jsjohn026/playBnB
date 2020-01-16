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
          <ul className="header-list">
            <li><a href="#" onClick={this.handleClick}>Become a host</a></li>
            <li><a href="#" onClick={this.handleClick}>Help</a></li>
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

    const firstName = currentUser ? currentUser.fname : null;

    const userDropdown = (
      <div id="dropdown" className="user-dropdown">
        <li>Hi, {firstName}!</li>
        <li>Reservations</li>
        <li>
          <button className="header-button" onClick={logout}>Log Out</button></li>
      </div>
    );
  
    const fName = firstName ? firstName : null;
    const userLinks = (
      <header className="header">
        <nav className="header-nav">
          <div className="header-logo">
            <Link to="/"></Link>
          </div>
          <ul className="header-list">
            <li><a onClick={this.handleClick}>Become a host</a></li>
            <li><a onClick={this.handleClick}>Saved</a></li>
            <li><a onClick={this.handleClick}>Trips</a></li>
            <li><a onClick={this.handleClick}>Messages</a></li>
            <li><a onClick={this.handleClick}>Help</a></li>
            <li className="user-icon">{fName}
              {userDropdown}
            <button className="header-button" onClick={logout}>Log Out</button></li>
          </ul>
        </nav>
      </header>
    );
  
  return currentUser ? userLinks : nonUserLinks;
  };
}

export default Navbar;