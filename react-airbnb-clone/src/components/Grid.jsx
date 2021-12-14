import React, { Component } from 'react';
import grid from '../../assets/images/photo-grid.png'

class Grid extends Component {
  render() {
    return (
      <div className="photo-grid">
        <img src={grid} alt="photos" />
        <div className="photo-grid-text">
          <h1>Online Experiences</h1>
          <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
      </div>
    );
  }
}

export default Grid;
