import React from 'react'
import exclusive from '../assets/exclusive_image.png'
import './offer.css'

const offer = () => {
  return (
    <div className="offers">
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offer for you</h1>
            <p>Only ON best sellings Products</p>
            <button>CHECK NOW</button>
        </div>
        <div className="offers-right">
            <img src={exclusive} alt="" />
        </div>
      
    </div>
  )
}

export default offer
