import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signin.css';

function Signin() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/loginpage');
    console.log('registerData', formData);
  
    try {
      const response = await fetch('http://localhost:3000/user/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullname: formData.name, 
          email: formData.email,
          password: formData.password,
        }),
      });

  
      if (!response.ok) {
        throw new Error('Registration failed');
      } else {
        alert("user registration successful");
        
      }
  
      const responseData = await response.json();
      console.log('Server Response:', responseData);
  
      // Reset the form data after successful registration
      setFormData({
        fullname: '',
        email: '',
        password: '',
      });
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };

  return (
    <div>
      <div className="signin-container">
        <div className="signin-container-fluid">
          <div className="img-container">
            <img src="https://emailgurus.xyz/static/homepage/images/emailgurus-user.svg" alt="Sample" />
          </div>
          <form onSubmit={handleSubmit}>
            <p className="form-header">Sign In Into Your Account</p>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="textname"
              placeholder="Enter Your Name Here"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="textname"
              placeholder="Enter Your Email Here"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              className="form-control"
              id="password"
              aria-describedby="password"
              placeholder="Enter Your Password Here"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn-light">
              <strong>Submit</strong>
            </button>
            <br />
            <a href="" className="forgot">
              Forgot email?
            </a>
            or
            <div className="buttons">
              <a
                href="https://accounts.google.com/lifecycle/steps/signup/name?continue=https://myaccount.google.com?utm_source%3Daccount-marketing-page%26utm_medium%3Dcreate-account-button&dsh=S-1274418394:1709368354662096&flowEntry=SignUp&flowName=GlifWebSignIn&theme=glif&TL=ADg0xR3FKmP2gyoWcJqMqSK25opzfka4Tj88yPzGFm8k5TDnNm17EM9bkVTuPzNe"
                className="Create-Account"
              >
                Create Account
              </a>
            </div>
          </form>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Signin;
