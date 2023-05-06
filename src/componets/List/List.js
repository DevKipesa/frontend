import React, { useState } from 'react';
import './List.css';
import houseImage from '../../images/Bitmap.png';

function List() {
  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardClick = (index) => {
    setSelectedCard(index);
  }

  const cardList = [
    {title: 'Beautiful House', address: '123 Main St, Anytown USA', price: 'Ksh 30m'},
    {title: 'Nice House', address: '456 Main St, Anytown USA', price: 'Ksh 40m'},
    {title: 'Big House', address: '789 Main St, Anytown USA', price: 'Ksh 50m'},
    {title: 'Small House', address: '101 Main St, Anytown USA', price: 'Ksh 20m'},
    {title: 'Cozy House', address: '202 Main St, Anytown USA', price: 'Ksh 25m'},
    {title: 'Cozy House', address: '202 Main St, Anytown USA', price: 'Ksh 25m'},
    {title: 'Cozy House', address: '202 Main St, Anytown USA', price: 'Ksh 25m'},
    {title: 'Cozy House', address: '202 Main St, Anytown USA', price: 'Ksh 25m'},
  ];

  const renderCard = (card, index) => {
    return (
      <div key={index} className="card" onClick={() => handleCardClick(index)}>
        <div className="house-image" style={{backgroundImage: `url(${houseImage})`}}></div>
        <div className="house-details">
          <h2>{card.title}</h2>
          <p>{card.address}</p>
        </div>
        <div className="house-price">
          <h3>{card.price}</h3>
        </div>
      </div>
    );
  }

  return (
    <div className='cardholder'>
      {cardList.map((card, index) => {
        return index === selectedCard ? (
          <div key={index}>
            {renderCard(card, index)}
            <div className='form-container'>
              <form>
                <h2>Fill in your details:</h2>
                <label>
                  Name:
                  <input type="text" name="name" />
                </label>
                <label>
                  Email:
                  <input type="email" name="email" />
                </label>
                <label>
                  Phone:
                  <input type="tel" name="phone" />
                </label>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        ) : (
          renderCard(card, index)
        );
      })}
    </div>
  );
}

export default List;
