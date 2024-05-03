import React, { useState } from "react";
import axios from "axios";
import logo from "../img/stock_app_logo-removebg-preview_2.png";
import App from '../App'
import Login from "../Login/login"
function Singup(){
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pages, setpage] = useState(0);
    const handleSingupSubmit = async (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/signup',[name,email,password])
        .then(res=> {
          console.log(res);
        <App/>
      })
        .catch(err => console.log(err));
      };
      
    return(
      <>
      {pages===0 && <SingupPage/>}
      {pages===1 && <Login/>}
      {pages===2 && <App />}

      </>
    );
function SingupPage(){
    return (
        <>
        <div className="topBackgrung">
        <div className="logobox">
          <img className="loginLogo" src={logo} alt="logo" />
          <h1 className="lgtext">Singup</h1>
        </div>
        <form onSubmit={handleSingupSubmit}>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Enter your user name"
            onChange={(event) =>setName(event.target.value)}
            autocomplete="name"
          />
          <br />
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Your Email"
            onChange={(event) => setEmail(event.target.value)}
            autocomplete="current-password"
          />
          <br />
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            autocomplete="email"
          />
          <br />
          <button type="submit">Singup</button>
          <p>or</p>
          
          <button className="sButton" onClick={()=>{setpage(1)}}>Login</button>
        </form>
        
      </div>
        </>
    )
}
  }
  export default Singup;