import React from "react";
import "./hero.css";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_img from "../assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
          <h2>new arrivals</h2>
          <div className="hero-hand-icon">
             <p>new</p>
             <img src={hand_icon} alt="" srcset="" />
          </div>
          <p>collection</p>
          <p>for everyone</p> 

          <div className="hero-latest-btn">
             <div>Latest collection</div>
             <img src={arrow_icon} alt="" srcset="" />
          </div>
      </div>
      <div className="hero-right">
          <img src={hero_img} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Hero;
