import React from "react";
import "./footer.css";
import footer_logo from "../assets/logo_big.png"
import insta_icon from "../assets/instagram_icon.png"
import pint_icon from "../assets/pintester_icon.png"
import whatsapp_icon from "../assets/whatsapp_icon.png"
const footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="logo" />
        <p>AFFERELLE</p>
      </div>
      <ul className="footer-links">
        <li>company</li>
        <li>Offices</li>
        <li>Privacy policy</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icon-container">
            <img src={insta_icon} alt="insta" />
        </div>
        <div className="footer-icon-container">
            <img src={pint_icon} alt="insta" />
        </div>
        <div className="footer-icon-container">
            <img src={whatsapp_icon} alt="insta" />
        </div>                
      </div>
      <div className="footer-copyright">
        <hr />
        <p>© 2021 Afferelle. All rights reserved</p>
      </div>
    </div>
  );
};

export default footer;
