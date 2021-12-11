import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="navitems">
        <div className="left">
          <i className="devicon-react-original colored"></i>
          <span>React course - project1</span>
        </div>
        <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </header>
    );
  }
}

export default Header;
