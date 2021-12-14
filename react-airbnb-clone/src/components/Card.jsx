import React from 'react';
import star from '../../assets/images/star.png'


const Card = ({ coverImg, rating, reviewCount, title, location, price, openSpots }) => {
  return (
    <div className="card">
      <div className="card-badge">
        <small>{openSpots > 0 ? `${openSpots} spots` : `soldout`}</small>
      </div>
      <img src={`../../assets/images/${coverImg}`} alt="katie-zaferes" className="card-image" />
      <div className="card-header">
        <img src={star} alt="star" />
        <span>{rating}</span>
        <span>({reviewCount})・</span>
        <span>{location}</span>
      </div>
      <p>{title}</p>
      <p><strong>From ${price}</strong> / person</p>
    </div>
  );
};

export default Card;
