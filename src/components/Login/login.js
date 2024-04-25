import React, { useState } from 'react';
import "./login.css";
import logo from '../img/stock_app_logo-removebg-preview_2.png' ;
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  }

  return (
    <>
      
    <div className='topBackgrung'>

    <div className='logobox'>
        <img  src={logo} alt='logo'/>
        <h1 className='logtext'>Login</h1>
      </div>
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        id="email"
        value={email}
        placeholder='Your Email'
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <input
        type="password"
        id="password"
        value={password}
        placeholder='Password'
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <button type="submit">Login</button>
    </form>
    </div>
    
    </>
  );
}
export default LoginForm;