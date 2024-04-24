import React,{useState} from 'react';
import {useEffect} from 'react';
import "./Listproduct.css";
import cross_icon from "../../assets/cart_cross_icon.png"

const Listproduct = () => {

  const [allproducts, setAllproducts] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const response = await fetch('https://e-commerce-app-0i4m.onrender.com/allproducts');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setAllproducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  useEffect(() => {
    fetchAllProducts()
  }, [])

  const removeProduct = async (id) => {
    try {
      const response = await fetch('https://e-commerce-app-0i4m.onrender.com/removeproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ id:id }),
      });
      if (!response.ok) {
        throw new Error('Failed to remove product');
      }
      const data = await response.json();
      console.log(data);
      await fetchAllProducts();
      alert(data.message);
    } catch (error) {
      console.error('Error removing product:', error);
    }
  }

  return (
    <div className="listproduct">
      <h1>All Product List </h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old price</p>
        <p>New price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product,index) => (
          <><div className="listproduct-format-main listproduct-format" key={index}>
            <img src={`https://e-commerce-app-0i4m.onrender.com/${product.image}`} className="listproduct-product-icon" alt="product" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p> 
            <p>{product.category}</p>
            <img onClick={()=>{removeProduct(product.id)}} src={cross_icon} className="listproduct-cross-icon" alt="" />
          </div>
          <hr /></>
        ))}
      </div>
    </div>
  ) 
}

export default Listproduct

