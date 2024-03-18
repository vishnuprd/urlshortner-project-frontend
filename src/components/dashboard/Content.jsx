import React from 'react'
import Sidebarlayout from '../Layout/Sidebarlayout';
function Content() {
  return (
   
    <div>
     <Sidebarlayout>
         <div className="sidebar">
      <div className="landing-text">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>

      </div>
      <div className="landing-image">
        <img src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/illustration-working.svg" alt="Working Illustration" />
      </div>

      <section className="features" id="features">
        <div className="container">
      
          <div className="url-shorten-feature">
            
              
               
              
            <div className="url-shorten-results"></div>
          </div>
          
          {/* Advanced Features */}
          <div className="more-features">
            <div className="section-header">
              <h2>Advanced Statistics</h2>
              <p>
                Track how your links are performing across the web with our
                advanced statistics dashboard.
              </p>
            </div>
            <div className="more-features-content">
              <div className="feature">
                <div className="feature-illustration">
                  <img src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-brand-recognition.svg" alt="Feature Illustration Icon" />
                </div>
                <div className="feature-details">
                  <h3>Brand Recognition</h3>
                  <p>
                    Boost your brand recognition with each click. Generic links
                    don’t mean a thing. Branded links help instil confidence in
                    your content.
                  </p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-illustration">
                  <img src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-detailed-records.svg" alt="Feature Illustration Icon" />
                </div>
                <div className="feature-details">
                  <h3>Detailed Records</h3>
                  <p>
                    Gain insights into who is clicking your links. Knowing when
                    and where people engage with your content helps inform
                    better decisions.
                  </p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-illustration">
                  <img src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-fully-customizable.svg" alt="Feature Illustration Icon" />
                </div>
                <div className="feature-details">
                  <h3>Fully Customizable</h3>
                  <p>
                    Improve brand awareness and content discoverability through
                    customizable links, supercharging audience engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </Sidebarlayout>
    </div>
   
  )
}

export default Content