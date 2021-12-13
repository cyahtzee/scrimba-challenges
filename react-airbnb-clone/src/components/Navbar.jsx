import React, { Component } from 'react';
import airbnb from '../../assets/images/airbnb-logo.png'
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-component">
        <img src={airbnb} alt="airbnb-logo" />
      </div>
    );
  }
}

export default Navbar;
