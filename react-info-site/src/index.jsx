import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

const Home = () => {
  return (
    <div>
      <div className="nav-bar">
        <i className="devicon-react-original colored">React Facts</i>
        <span>React course - project1</span>
      </div>
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
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Home />, root);
}
