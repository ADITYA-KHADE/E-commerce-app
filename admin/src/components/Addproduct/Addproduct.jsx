import React from "react";
import "./Addproduct.css";
import upload_area from "../../assets/upload_area.svg";

const Addproduct = () => {
  const [image, setImage] = React.useState(false);
  const [productdetails, setProductdetails] = React.useState({
    name: "",
    category: "women",
    image: "",
    old_price: "",
    new_price:"",
  });
  const inputHandler = (e) => {
    setProductdetails({
      ...productdetails,
      [e.target.name]: e.target.value,
    });
  }

  const add_product = async () => {
    // console.log(productdetails);
    let product=productdetails;
    let formData=new FormData();
    let responseData;

    formData.append('product',image);
    await fetch('http://localhost:8080/upload',
    {
      method:'POST',
      header:
      {
        Accept:'application/json',
      },
      body:formData,
    }).then((res)=>res.json()).then((data)=>
    {
      responseData=data
    });

    if(responseData && responseData.success){
      product.image=responseData.image_url;
      console.log(product);


      const addProductResponse = await fetch('https://e-commerce-app-0i4m.onrender.com/addproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(product),
      });
      const addProductData = await addProductResponse.json();
      alert("Added Successfully");
    }
    else{
      alert("Image upload failed");
    }
  }

  const imageHandler=(e)=>{
    setImage(e.target.files[0]);
  }
  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>product tile</p>
        <input value={productdetails.name} onChange={inputHandler} type="text" name="name" placeholder="Product name" />
      </div>

      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>product price</p>
          <input value={productdetails.old_price} onChange={inputHandler} type="text" name="old_price" placeholder="Product price" />
        </div>
        <div className="addproduct-itemfield">
          <p>offer price</p>
          <input value={productdetails.new_price} onChange={inputHandler} type="text" name="new_price" placeholder="offer price" />
        </div>
      </div>

      <div className="addproduct-itemfield">
        <p>product category</p>
        <select value={productdetails.category} onChange={inputHandler} name="category" className="add-product-selector">
          <option value="women">women</option>
          <option value="men">men</option>
          <option value="kid">kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <br />
        <p>product photos</p>
        <label htmlFor="file-input">
          <img src={image?URL.createObjectURL(image):upload_area} className="addproduct-thumnail-img" alt="" />
        </label>
        <input onChange={imageHandler}  type="file" name="image" id="file-input" hidden />
        <br />
        <button onClick={()=>{add_product()}} className="addproduct-btn">ADD</button>
      </div>
    </div>
  );
};

export default Addproduct;
