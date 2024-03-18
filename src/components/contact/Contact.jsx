import React from 'react';
import './contact.css';
import Sidebarlayout from '../Layout/Sidebarlayout';
function Contact() {

  

  return (
  <Sidebarlayout>
      <div id="contact" className="contact-area section-padding">
        <div className="contact-container">
          <div className="section-title text-center">
            <h1>Get in Touch</h1>
            <p>Rebrandly is the fastest, easiest way to brand, 
            <br/>
            track, and share short URLs using a custom domain name.</p>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="contact">
                <form className="form" name="enq" method="post" action="contact.php" >
                  <div className="row">
                    <div className="contact-form-group col-md-6">
                      <input type="text" name="name" className="contact-form-control" placeholder="Name" required />
                    </div>
                    <div className="contact-form-group col-md-6">
                      <input type="email" name="email" className="contact-form-control" placeholder="Email" required />
                    </div>
                    <div className="contact-form-group col-md-12">
                      <input type="text" name="subject" className="contact-form-control" placeholder="Subject" required />
                    </div>
                    <div className="contact-form-group col-md-12">
                      <textarea rows="6" name="message" className="contact-form-control" placeholder="Your Message" required></textarea>
                    </div>
                    <div className="col-md-12 text-center">
                      <button type="submit" name="submit" id="submitButton" className="btn btn-contact-bg" title="Submit Your Message!">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="single_address">
                <i className="fa fa-map-marker"></i>
                <h4>Our Address</h4>
                <p>123, Coimabtore </p>
              </div>
              <div className="single_address">
                <i className="fa fa-envelope"></i>
                <h4>Send your message</h4>
                <p>test@example.com</p>
              </div>
              <div className="single_address">
                <i className="fa fa-phone"></i>
                <h4>Call us on</h4>
                <p>(+91) 900 00 0000</p>
              </div>
              <div className="single_address">
                <i className="fa fa-clock-o"></i>
                <h4>Work Time</h4>
                <p>Mon - Fri: 08.00 - 16.00. <br />Sat: 10.00 - 14.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Sidebarlayout>
 
  );
}

export default Contact;
