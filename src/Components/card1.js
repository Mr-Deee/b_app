import React, { useState } from 'react';
import '../components/card1.css'
const CardButton = () => {
  const [showCard, setShowCard] = useState(false);
  const [showCardd, setShowCardd] = useState(false);
  const handleClick = () => {
    setShowCard(!showCard);
    setShowCardd(false);
  };
  

  const handleClick2 = () => {
    setShowCardd(!showCardd);
    setShowCard(false);
  };

  return (
    <>

    <div className='btnsection'>
      <button className='btncard' onClick={handleClick}>Client</button>
      {showCard && <Card />}
 
   
      <button className='btncard' onClick={handleClick2}>crafty</button>
      {showCardd && <Card2 />}
</div>
    </>
  );

};

const Card = () => {
  return <div className="card"> card content1.</div>;
};
const Card2 = () => {
  return <div className="card"> card content.</div>;
};

export default CardButton;