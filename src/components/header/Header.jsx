import React from 'react';
import './header.css';
import {useNavigate} from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    const handleRegisterClick=()=>{
        navigate('/registerpage')
    }

   


  return (
    <div>
      <div className="landing-page">
        <header>
          <div className="container">
            <a  className="logo"><b>Shorter</b></a>
           
          </div>
        </header>
        <div className="content">
          <div className="container">
            <div className="info">
              <h1>Build stronger digital connections</h1>
              <p>Use our URL shortener, QR Codes, and Link-in-bio pages to engage your audience and connect them to the right information. Build, edit, and track everything inside the Shortner Connections Platform.</p>
              <button onClick={handleRegisterClick}>
  <a ><strong>Get Started</strong></a>
</button>

            </div>
            <div className="image">
              <img src="https://i.postimg.cc/65QxYYzh/001234.png" alt="Sample" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
