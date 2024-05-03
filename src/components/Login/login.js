import React, { useState } from "react";
import "./login.css";
import logo from "../img/stock_app_logo-removebg-preview_2.png";
import App from '../App'
import { useNavigate } from "react-router-dom";
import Singup from "../singup/singup";


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pages, setpage] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };
return (
    <> 
      {pages===0 && <Login/>}
      {pages===1 && <Singup/>}
      {pages===2 && <App />}
    </>
    
  );

function Login(){
    return(
      <>
      <div className="topBackgrung">
        <div className="logobox">
          <img className="loginLogo" src={logo} alt="logo" />
          <h1 className="lgtext">Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Your Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <button type="submit" onClick={()=>{setpage(2)}}>Login</button>
          <p>or</p>
          
          <button className="sButton" onClick={()=>{setpage(1)}}>Singup</button>
        </form>
        
      </div>
      </>
    );
  }


  
}
export default LoginForm;
