import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart from "../assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../contexts/ShopContext";


const Navbar = () => {
  const [Menu, setMenu] = useState("Shop");
  const { totalcartitems } = React.useContext(ShopContext);
  const menuref=React.useRef();
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/"><img src={logo} alt="" /></Link>
        <p>AFERELLE</p>
      </div>
      <div className="nav-links">
        <ul ref= {menuref}>
          <li onClick={() => setMenu("Shop")}><Link style={{ textDecoration: 'none' }} to="/">Shop</Link>{Menu === "Shop" ? <hr /> : <></>}</li>
          <li onClick={() => setMenu("Mens")}><Link style={{ textDecoration: 'none' }} to="/mens">Mens</Link>{Menu === "Mens" ? <hr /> : <></>}</li>
          <li onClick={() => setMenu("Womens")}><Link style={{ textDecoration: 'none' }} to="/womens">Womens</Link>{Menu === "Womens" ? <hr /> : <></>}</li>
          <li onClick={() => setMenu("Kids")}><Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link>{Menu === "Kids" ? <hr /> : <></>}</li>
        </ul>
      </div>
      <div className="nav-login">
        {localStorage.getItem("auth-token") ? <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button> : <Link to="/login"><button>login</button></Link>}
        {/* <Link to="/login"><button>login</button></Link> */}
        <Link to="/cart"><img src={cart} alt="" /></Link>
        <div className="cart-count">{totalcartitems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
