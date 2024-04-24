import React from 'react'
import "./style/loginsignup.css"
import {useState} from 'react';
const Loginsignup = () => {
  const [state, setState] = useState("login");
  const [formdata, setFormdata] = useState({
    name:"",
    email:"",
    password:"",
  });
  
  const login = async() => {
    console.log("login",formdata)
    let responsedata;
    await fetch('https://e-commerce-app-0i4m.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formdata),
    }).then((response) => response.json()).then((data) => {responsedata=data});

    if(responsedata.success){
      localStorage.setItem('auth-token',responsedata.token);
      window.location.replace("/");
    }else{
      console.log(responsedata.message)
      alert(responsedata.message)
    }
  }

  const signup = async() => {
    console.log("signup",formdata)
    let responsedata;
    await fetch('https://e-commerce-app-0i4m.onrender.com/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formdata),
    }).then((response) => response.json()).then((data) => {responsedata=data});
    if(responsedata.success){
      localStorage.setItem('auth-token',responsedata.token);
      window.location.replace("/");
    }else{
      console.log(responsedata.message)
      alert(responsedata.message)
    }

  }

  const handleChange = (e) => {
    setFormdata({...formdata,[e.target.name]:e.target.value})
  };

  return (
    
    <div className="login">
      <div className="login-container">
        <h1>{state}</h1>
        <div className="login-field">
          {state==="signup" ? <input type="text" name="name" value={formdata.name} onChange={handleChange} placeholder="username" />:<></>}
          <input name="email" value={formdata.email} onChange={handleChange} type="email" placeholder="email" />
          <input name="password" value={formdata.password} onChange={handleChange} type="password" placeholder="password" />
        </div>
        <button type="button" onClick={()=>{state==="login"?login():signup()}}>button</button>
        {state==="signup" ? <div className="login-exist">Already have account ? <span onClick={()=>setState("login")}>Sign in here</span></div>:<></>}
        {state==="login" ? <div className="login-exist">Create an account ? <span onClick={()=>setState("signup")}>Sign up here</span></div>:<></>}
        <div className="login-exist">ADMIN Panal : <span><a href="/">Click Here</a></span></div>
        <div className="login-agree">
          <input type="checkbox" />
          <p>By clicking Sign Up, you agree to our <span>Terms of Use</span> and our <span>Privacy Policy.</span></p>
        </div>
      </div>
    </div>
  )
}

export default Loginsignup;
