import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.user
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    )
  }

  render() {
    let name;
    let formName = "Log in";

    if (this.props.formType === "signup") {
      name =( 
        <>
          <label>
            <input type="text"
            value={this.state.fname}
            onChange={this.update("fname")}
            placeholder="First Name"
            className="login-input" />
        </label>
        <br />
        <label>
            <input type="text"
            value={this.state.lname}
            onChange={this.update("lname")}
            placeholder="Last Name"
            className="login-input" />
          </label>
          <br />
        </>
      )
      formName = "Sign up";
    }
    // use fragments to wrap 

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="welcome">
          {formName} to continue or {this.props.otherForm}
          </div><br />
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          <div className="login-form"><br/>
            {name}
            <label>
              <input type="text" 
              value={this.state.email} 
              onChange={this.update("email")} 
              placeholder="Email Address"
              className="login-input"/>
            </label>
            <br/>
            <label>
              <input type="password" 
              value={this.state.password} 
              onChange={this.update("password")} 
              className="login-input"
              placeholder="Password"
              />
            </label>
            <br/>
            <label>
            <input className="session-submit" type="submit" value={formName}/>
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);