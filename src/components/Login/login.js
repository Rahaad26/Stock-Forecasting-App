import React, { useState } from 'react';
import "./login.css"
import IMG from '../img/stock_app_logo-removebg-preview_2.png'
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login process
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
      // Redirect to the home page or other protected area
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      
      <div className='Box2'>
       <img src={IMG}/>
      </div>

      <div className="Box">
      <h2>Welcome to Stock Master</h2>
      <form onSubmit={handleSubmit}>
        <div className="username-input">
          <label htmlFor="username"  >Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="password-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="forgot-password">
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">LOGIN</button>
      </form>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
      </div>

    </div>
  );
}

export default Login;
