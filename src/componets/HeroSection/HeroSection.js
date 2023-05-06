import React from 'react'
import './HeroSection.css'
import image from '../../images/Group 982.png'

function HeroSection() {
  return (
    <div className="herosection">
      <div className="img">
      <div className="info">
          <h1>Find it. Tour it. Own it.</h1>
          <p>
          Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else
          </p>
        </div>
        <img src={image} alt="" />
        
      </div>
    </div>
  )
}

export default HeroSection