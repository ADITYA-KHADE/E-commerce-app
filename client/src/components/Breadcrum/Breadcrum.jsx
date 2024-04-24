import React from 'react';
import "./Breadcrum.css";
import Arrow_icon from "../assets/breadcrum_arrow.png"
const Breadcrum = ({ product }) => {
    return (
      <div className="breadcrum">
        <span> Home </span>
        <img src={Arrow_icon} alt="arrow" className="arrow-icon" />
        <span> Shop </span>
        <img src={Arrow_icon} alt="arrow" className="arrow-icon" />
        <span> {product.category} </span>
        <img src={Arrow_icon} alt="arrow" className="arrow-icon" />
        <span> {product.name} </span>
      </div>
    );
  };

export default Breadcrum;
