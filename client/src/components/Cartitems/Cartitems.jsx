import React from "react";
import "./Cartitems.css";
import { ShopContext } from "../../contexts/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";
const Cartitems = () => {
  const { cart, all_product, removefromcart,totalcartamount } = React.useContext(ShopContext);
  return (
    <div className="cart-items">
        <div className="cart-items-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e) => {
          if (cart[e.id] > 0) {
            return (
              <div>
                <div className="cart-items-format">
                  <img src={`https://e-commerce-app-0i4m.onrender.com/${e.image}`} alt="" className="carticon-product-icon" />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className="cart-item-quantity">{cart[e.id]}</button>
                  <p>{e.new_price * cart[e.id]}</p>
                  <img
                    src={remove_icon}
                    className="carticon-remove-icon"
                    onClick={() => {
                      removefromcart(e.id);
                    }}
                    alt=""
                  />
                </div>
                <hr />
              </div>
            );
          }
          else{
            return null;
          }
        })}
        <div className="cart-items-down">
            <div className="cart-items-total">
                <h1>cart totals</h1>
                <div>
                    <div className="cart-items-total-items">
                        <p>subtotal</p>
                        <p>${ totalcartamount()}</p>
                    </div>
                    <hr />
                    <div className="cart-items-total-items">
                        <p>shipping charges</p>
                        <p className="shipping">$40</p>
                    </div>
                    <hr />
                    <div className="cart-items-total-items">
                        <h3>total</h3>
                        <h3>${totalcartamount()}</h3>
                    </div>
                </div>
                <button className="cart-items-total-button">checkout</button>
            </div>
            <div class="vertical-line"></div>
            <div className="cart-items-promocode">
                <p>apply promo code</p>
                <div className="cart-items-promobox">
                    <input type="text" placeholder="enter promo code" />
                    <button>apply</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Cartitems;
