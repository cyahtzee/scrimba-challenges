import React from 'react'
import Navbar from './Navbar'
import Grid from './Grid'
import Card from './Card'
import data from '../data'


const App = () => {
  const cards = data.map(item => {
    return (
      <Card
        title={item.title}
        price={item.price}
        location={item.location}
        coverImg={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
      />
    )
  });
  return (
    <div>
      <Navbar />
      <Grid />
      <div className="cards">
        {cards}
      </div>
    </div>
  );
};

export default App;
