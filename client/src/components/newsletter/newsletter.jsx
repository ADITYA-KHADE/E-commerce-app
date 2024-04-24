import React from 'react'
import './newsletter.css'

const newsletter = () => {
  return (
    <div className="newsletter">
        <h1>Get exclusive offer to your email</h1>
        <p>subscribe to get newsletter and stay updated</p>
        <div>
            <input type="text" placeholder="Enter your email address" />
            <button>subscribe</button>
        </div>
    </div>
  )
}

export default newsletter
