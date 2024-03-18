import React from 'react';
import Sidebar from '../dashboard/Sidebar';
import { Link, useNavigate } from "react-router-dom";
import Content from '../dashboard/Content';
import Footer from '../footer/Footer';

function Sidebarlayout({ children }) {

    const navigate = useNavigate();

    const handleDashboardClick=()=>{
        navigate('/url-shortner-page')
    }

    const handleQrgeneratorClick = () => {
        navigate('/qrcode');
    }

    const handleProfilePageClick = () => {
        navigate('/profilepage');
    }

    const handleContentPageClick = () => {
        navigate('/dashboard');
    }

   const handleContactClick=()=>{
    navigate('/contact')
   }

   const handlePricingClick=()=>{
    navigate('/pricing')
   }



    return (
        <>
            <div id="wrapper" className="container-wrapper">
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <li className="sidebar-brand">
                        <Link to="/dashboard">shorter.com</Link>
                        </li>
                        <li>
                            <a  onClick={handleContentPageClick}>Home</a>
                        </li>
                        <li>
                            <a onClick={handleDashboardClick}>URL-Shortner</a>
                        </li>
                        <li>
                            <a  onClick={handleQrgeneratorClick}>Qr Code Generator</a>
                        </li>
                        <li>
                            <a  onClick={handleContactClick}>Contact</a>
                        </li>
                        <li>
                            <a  onClick={handlePricingClick}>pricing</a>
                        </li>
                        <hr/>
                        <li>
                            <a  onClick={handleProfilePageClick}>Settings</a>
                        </li>
                      
                      
                    </ul>
                </div>
            </div>

            <div id="page-content-wrapper">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            
                        </div>
                    </div>
                </nav>
              
                <Sidebar />
                {children} 
               <Footer/>
            </div>
        </>
    );
}

export default Sidebarlayout;
