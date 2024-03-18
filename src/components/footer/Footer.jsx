import React from 'react'
import './footer.css';
import { useNavigate } from "react-router-dom";
function Footer() {
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
    <div>
        <div class="footer">
	<div class="container">		
		<div class="row text-center">						
			<div class="col-lg-12 col-sm-12 col-xs-12">
				<div class="footer_menu">
					<ul>
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
                        <li>
                            <a  onClick={handleProfilePageClick}>Settings</a>
                        </li>
						
					</ul>
				</div>						
				<div class="footer_copyright">
					<p>© All Rights Reserved.</p>
				</div>	
				<div class="footer_profile">
					<ul>
						<li><a ><i class='bx bxl-facebook-circle'></i></a></li>
						<li><a ><i class='bx bxl-twitter'></i></a></li>
						<li><a ><i class='bx bxl-instagram'></i></a></li>
					</ul>
				</div>						
			</div>						
		</div>				
	</div>
</div>
    </div>
  )
}

export default Footer