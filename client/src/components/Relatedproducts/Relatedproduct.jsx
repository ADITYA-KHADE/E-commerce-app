import React from 'react'
import  "./Relatedproduct.css"
import Data_product from "../assets/data"
import Item from "../items/item"

const Relatedproduct = () => {
  return (
    <div  className="relatedproducts">
        <h1>You might also like related products . . .</h1>
        <hr />
        <div className="relatedproducts-items">
        {Data_product.map((item, i) => 
        {
          return <Item
            key={i}
            id={item.id}
            image={`https://e-commerce-app-0i4m.onrender.com/${item.image}`}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
            />;
        })}
        </div>
    </div>
  )
}

export default Relatedproduct
