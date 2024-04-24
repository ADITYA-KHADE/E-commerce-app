import React from 'react'
import "./Navbar.css"
import navlogo from "../../assets/nav-logo.svg";
import { Link } from 'react-router-dom';
import navprofile from "../../assets/nav-profile.svg";
const Navbar = () => {
  return (
    <div className="navbar">
        {/* <img className="navlogo" src={navlogo} alt="" srcSet="" /> */}
        <Link to="/addproduct" className="navlink"><img className="navlogo" src={navlogo} alt="" srcSet="" /></Link>
        <img className="navprofile" src={navprofile} alt="" />
    </div>
  )
}

export default Navbar;
