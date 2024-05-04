import React, { useState,useEffect } from "react";
import "./login.css";
import logo from "../img/stock_app_logo-removebg-preview_2.png";
import { useNavigate } from "react-router-dom";
import Singup from "../singup/singup";
import axios from "axios";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pages, setpage] = useState(0);
  const navigate = useNavigate();
  
  axios.defaults.withCredentials = true;

  useEffect(()=>{
    axios.get('http://localhost:8081/')
    .then(res =>{
      console.log(res);
    })
    .catch(err => console.log(err))

   },[])
   
  const handleSubmit = (event) => {
    const values = {
      email: email,
      password: password,
    };
    event.preventDefault();
    axios
      .post("http://localhost:8081/login", values)
      .then((res) => {
        if (res.data.Login) {
          navigate("/home", { replace: true });
        } else alert("No record");

        console.log(res);
      })
      .catch((err) => console.lot(err));
  };

  return (
    <>
      {pages === 0 && <Login />}
      {pages === 1 && <Singup />}
    </>
  );

  function Login() {
    return (
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
            <button type="submit">Login</button>
            
            <p>or</p>

            <button
              className="sButton"
              onClick={() => {
                setpage(1);
              }}
            >
              Singup
            </button>
          </form>
        </div>
      </>
    );
  }
}
export default LoginForm;
