import React, { useState } from "react";
import "./login.css";
import logo from "../img/stock_app_logo-removebg-preview_2.png";
import App from '../App'


function LoginForm() {
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pages, setpage] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <>
    {pages===0 && < Login/>}
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


  function Singup(){
    return(
      <>
      <div className="topBackgrung">
        <div className="logobox">
          <img className="loginLogo" src={logo} alt="logo" />
          <h1 className="lgtext">Singup</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Enter your user name"
            onChange={(event) =>setName(event.target.value)}
          />
          <br />
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
          <button type="submit" onClick={()=>{setpage(2)}}>Singup</button>
          <p>or</p>
          
          <button className="sButton" onClick={()=>{setpage(0)}}>Login</button>
        </form>
        
      </div>
      </>
    );
  }
}
export default LoginForm;
