import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../assets/stylesheets/application.scss';

const Hello = () => {
  return (
    <div>
      <App />
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
