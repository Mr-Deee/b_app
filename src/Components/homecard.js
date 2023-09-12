import React from 'react';
import './homecard.css'; // Import your CSS file for styling

const Card = ({ title, content, sub }) => {
  return (
    <div className="card">
      <h1 className="card-title">{title}</h1>
      <h3 className='card-sub'>{sub}</h3>

      <p className="card-content">{content}</p>
    </div>
  );
};

export default Card;
