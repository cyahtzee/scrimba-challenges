import React, { Component } from 'react';
import reactLogo from '../../assets/images/react-icon-large.png';

class Main extends Component {
  render() {
    return (
      <div className="body-info">
        <img src={reactLogo} alt="" />
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    );
  }
}

export default Main;
