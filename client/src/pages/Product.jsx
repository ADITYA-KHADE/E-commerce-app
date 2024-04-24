import React from "react";
import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrum/Breadcrum.jsx";
import Productdisplay from"../components/Productdisplay/Productdisplay.jsx";
import Description from "../components/Descriptionbox/Descriptionbox.jsx";
import Relatedproduct from "../components/Relatedproducts/Relatedproduct.jsx";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productid } = useParams();
  const product = all_product.find((e) => e.id === Number(productid));
  if (!product) {
    console.log(product);
    return <p>Product not found</p>;
  }
  
  return (
    <div className="product">
      <Breadcrum product={product} />
      <Productdisplay product={product} />
      <Description />
      <Relatedproduct />
    </div>
  );
};

export default Product;
