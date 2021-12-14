import React from 'react';
import star from '../../assets/images/star.png'


const Card = ({ img, rating, reviewCount, title, country, price }) => {
  return (
    <div>
      <div className="card">
        <img src={`../../assets/images/${img}`} alt="katie-zaferes" className="card-image" />
        <div className="card-header">
          <img src={star} alt="star" />
          <span>{rating}</span>
          <span>({reviewCount})・</span>
          <span>{country}</span>
        </div>
        <p>{title}</p>
        <p>From ${price} / person</p>
      </div>
    </div>
  );
};

export default Card;
