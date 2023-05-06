import React from 'react'
import './List.css'
import houseImage from '../../images/Bitmap.png';

import { Link } from 'react-router-dom';

function List() {
  return (<div className='cardholder'>
    
      <div className="card">
        <div className="house-image" style={{backgroundImage: `url(${houseImage})`}}></div>
        <div className="house-details">
          <h2>Beautiful House</h2>
          <p>123 Main St, Anytown USA</p>
        </div>
        <div className="house-price">
          <h3>Ksh 30m</h3>
        </div>
      </div>

      <div className="card">
        <div className="house-image" style={{backgroundImage: `url(${houseImage})`}}></div>
        <div className="house-details">
          <h2>Beautiful House</h2>
          <p>123 Main St, Anytown USA</p>
        </div>
        <div className="house-price">
          <h3>Ksh 30m</h3>
        </div>
      </div>

      <div className="card">
        <div className="house-image" style={{backgroundImage: `url(${houseImage})`}}></div>
        <div className="house-details">
          <h2>Beautiful House</h2>
          <p>123 Main St, Anytown USA</p>
        </div>
        <div className="house-price">
          <h3>Ksh 30m</h3>
        </div>
      </div>

      <div className="card">
        <div className="house-image" style={{backgroundImage: `url(${houseImage})`}}></div>
        <div className="house-details">
          <h2>Beautiful House</h2>
          <p>123 Main St, Anytown USA</p>
        </div>
        <div className="house-price">
          <h3>Ksh 30m</h3>
        </div>
      </div>

      <div className="card">
        <div className="house-image" style={{backgroundImage: `url(${houseImage})`}}></div>
        <div className="house-details">
          <h2>Beautiful House</h2>
          <p>123 Main St, Anytown USA</p>
        </div>
        <div className="house-price">
          <h3>Ksh 30m</h3>
        </div>
      </div>
    

    </div>
    
  )
}

export default List