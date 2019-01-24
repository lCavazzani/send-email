/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    const { auth } = this.props;
    switch (auth) {
      case null:
        return "still  deciding";
      case false:
        return "Logged out";
      default:
        return "logged in";
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="www.google.com" className="left brand-logo">
            {" "}
            Email
          </a>
          <ul className="right hide-on-med-and-down">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
