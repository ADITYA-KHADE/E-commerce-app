// import all_product from "../components/assets/all_product";
import React, { createContext } from "react";
import { useEffect } from "react";

export const ShopContext = createContext(null);
const getDefaultcart=()=>{
  let cart={};
  for(let i=0;i<300+1;i++){
    cart[i]=0;
  }
  return cart;
  
}
const ShopContextProvider = (props) => {

  const [all_product,setAll_product]=React.useState([]);
  const [cart,setCart]=React.useState(getDefaultcart());


  useEffect(() => {
    fetch('https://e-commerce-app-0i4m.onrender.com/allproducts')
    .then(res=>res.json())
    .then(data=>setAll_product(data));

     if(localStorage.getItem('auth-token')){
      fetch('https://e-commerce-app-0i4m.onrender.com/getcart',{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          Accept:'application/json',
        },
      })
      .then(res=>res.json())
      .then(data=>setCart(data));
     }

  }, []);
  
  
  const addtocart=(id)=>{
    setCart((prev)=>( {...prev,[id]:prev[id]+1}));
    if(localStorage.getItem('auth-token')){
      fetch('https://e-commerce-app-0i4m.onrender.com/addtocart',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          Accept:'application/json',
        },
        body:JSON.stringify({"id":id})
      })
      .then(res=>res.json())
      .then(data=>console.log(data));
    }
  }

  const removefromcart=(id)=>{
    setCart((prev)=>( {...prev,[id]:prev[id]-1}));
    if(localStorage.getItem('auth-token')){
      fetch('https://e-commerce-app-0i4m.onrender.com/removefromcart',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          Accept:'application/json',
        },
        body:JSON.stringify({"id":id})
      })
      .then(res=>res.json())
      .then(data=>console.log(data));
    }
  }

  const totalcartamount=()=>{
    let total=0;
    for(let i=0;i<300+1;i++){
      if(cart[i]>0){
        total+=cart[i]*all_product[i-1].new_price;
      }
    }
    return total;
  }

  const totalcartitems=()=>{
    let total=0;
    for(let i=0;i<all_product.length+1;i++){
      total+=cart[i];
    }
    return total;
  }

  const contextvalue = { totalcartitems ,totalcartamount,all_product ,cart,addtocart,removefromcart};

  return (
    <ShopContext.Provider value={contextvalue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
