import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    alert("user login successfully")
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/user/loginuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      navigate('/dashboard');
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };
  
  return (
    <div>
      <div className="logincontainer">
        <div className="login-container-fluid">
          <div className="img-container">
            <img src="https://i.pinimg.com/originals/65/dc/a6/65dca69f78972935caf61580e7c17bd9.png" alt="Sample" />
          </div>
          <form onSubmit={handleSubmit}>
            <h2 className="login-header">Welcome Back</h2>
            <p className="login-description">We are glad to have you again</p>
            <input
              type="login-email"
              className="login-form-control"
              id="email"
              aria-describedby="textname"
              placeholder="Enter Your Email Here"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="login-password"
              className="login-form-control"
              id="password"
              aria-describedby="password"
              placeholder="Enter Your Password Here"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember Me &nbsp;
              <a href="#">Forgot Password?</a>
            </label>
            <button type="submit" className="btn btn-light">
              <strong>Sign In</strong>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
