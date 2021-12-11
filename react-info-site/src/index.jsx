import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import '../assets/stylesheets/application.scss';

const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Home />, root);
}
