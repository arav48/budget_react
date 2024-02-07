// Login.js

import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  

  const handleLogin = () => {
    // Implement your login logic here
    console.log(`Login with username: ${username} and password: ${password}`);
    
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={()=>navigate ('/home')}>
          Login
        </button>
        <h3>
          OR
        </h3>
        <button type ="button" onClick={()=> navigate('/sign')}>
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Login;
