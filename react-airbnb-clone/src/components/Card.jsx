import React from 'react';
import star from '../../assets/images/star.png'


const Card = ({ coverImg, rating, reviewCount, title, location, price }) => {
  return (
    <div className="card">
      <img src={`../../assets/images/${coverImg}`} alt="katie-zaferes" className="card-image" />
      <div className="card-header">
        <img src={star} alt="star" />
        <span>{rating}</span>
        <span>({reviewCount})・</span>
        <span>{location}</span>
      </div>
      <p>{title}</p>
      <p>From ${price} / person</p>
    </div>
  );
};

export default Card;
