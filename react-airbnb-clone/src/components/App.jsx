import React, { Component } from 'react';
import Navbar from './Navbar'
import Grid from './Grid'
import Card from './Card'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Grid />
        <Card
          title="Life lessons with Katie Zaferas"
          price="136"
          country="USA"
          img="katie-zaferes.png"
          raiting="5.0"
          reviewCount="6"
        />
      </div>
    );
  }
}

export default App;
