import React from 'react';
import star from '../../assets/images/star.png'


const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="card-badge">
        <small>{item.openSpots > 0 ? `${item.openSpots} spots` : `soldout`}</small>
      </div>
      <img src={`../../assets/images/${item.coverImg}`} alt="katie-zaferes" className="card-image" />
      <div className="card-header">
        <img src={star} alt="star" />
        <span>{item.stats.rating}</span>
        <span>({item.stats.reviewCount})・</span>
        <span>{item.location}</span>
      </div>
      <p>{item.title}</p>
      <p><strong>From ${item.price}</strong> / person</p>
    </div>
  );
};

export default Card;
