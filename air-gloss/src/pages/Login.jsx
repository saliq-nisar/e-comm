import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setError('Please fill in all fields.');
      return;
    }

    if (login(username, password)) {
      navigate('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          {error && <div className="error-msg">{error}</div>}

          <label className="input-label" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />

          <label className="input-label" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />

          <button className="login-button" type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
