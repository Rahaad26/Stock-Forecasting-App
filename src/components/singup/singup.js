import React, { useState } from "react";
import axios from "axios";
import logo from "../img/stock_app_logo-removebg-preview_2.png";
import App from "../../App";
import Login from "../Login/login";
import { useNavigate } from "react-router-dom";
function Singup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pages, setpage] = useState(0);
  const navigate=useNavigate();

  const handleSingupSubmit = async (event) => {
    const values = {
      name: name,
      email: email,
      password: password,
    };
    if(name !=="" && email !==null && password !==null){
    event.preventDefault();
    axios
      .post("http://localhost:8081/signup", values)
      .then((res) => {
        console.log(res);
        navigate("/home", { replace: true });
      })
      .catch((err) => console.log(err));
    }else {
      alert("Enter all the values")
      
    }
  };

  return (
    <>
      {pages === 0 && <SingupPage />}
      {pages === 1 && <Login />}
    </>
  );
  function SingupPage() {
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
              onChange={(event) => setName(event.target.value)}
              autoComplete="name"
            />
            <br />
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Your Email"
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="current-password"
            />
            <br />
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="email"
            />
            <br />
            <button type="submit">Singup</button>
            <p>or</p>

            <button
              className="sButton"
              onClick={() => {
                setpage(1);
              }}
            >
              Login
            </button>
          </form>
        </div>
      </>
    );
  }
}
export default Singup;
