import React, { Component } from 'react';
import airbnb from '../../assets/images/airbnb-logo.png'
class Navbar extends Component {
  render() {
    return (
      <div>
        <img src={airbnb} alt="" />
      </div>
    );
  }
}

export default Navbar;
