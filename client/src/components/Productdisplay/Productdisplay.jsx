import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../../contexts/ShopContext';
import "./Productdisplay.css"
import star_icon from "../assets/star_icon.png"
import Star_dull from "../assets/star_dull_icon.png"
const apiurl=process.env.REACT_APP_SERVER_URL;

const Productdisplay = (props) => {
    const {product}=props;
    const {addtocart}=useContext(ShopContext);
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-left-list">
                    <img src={`${apiurl}/${product.image}`} alt="" />
                    <img src={`${apiurl}/${product.image}`} alt="" />
                    <img src={`${apiurl}/${product.image}`} alt="" />
                    <img src={`${apiurl}/${product.image}`} alt="" />
                </div>
                <div className="productdisplay-left-main">
                    <img className="productdisplay-img-main" src={`${apiurl}/${product.image}`} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={Star_dull} alt="" />
                    <p> 18,567+ users</p>
                </div>
                <div className="productdisplay-right-prices">
                    <h2>${product.new_price}</h2>
                    <h4>${product.old_price}</h4>
                </div>
                <div className="productdisplay-right-description">
                    <p>npsum
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec congue purus.
                    </p>
                </div>
                <div className="productdisplay-right-size">
                    <h2>Size:</h2>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>            
                <div className="productdisplay-right-button">
                    <button onClick={()=>{addtocart(product.id)}}>Add to Cart</button>
                </div>
                <div className="productdisplay-right-category"> <span> category : </span>womens, t-shirt , top</div>
                <div className="productdisplay-right-category"> <span> Tag : </span>Modern, latest , russian fashion</div>

            </div>
        </div>
    );
}

export default Productdisplay;
