import React from 'react';
import './pricing.css';
import Sidebarlayout from '../Layout/Sidebarlayout';

function Pricing() {
  return (
    <Sidebarlayout>
      <div>
        <section className="price_plan_area section_padding_130_80" id="pricing">
          <div className="price-container">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-8 col-lg-6">
                {/* Section Heading*/}
                <div className="section-heading text-center wow fadeInUp" data-wow-delay="0.2s">
                  <h6>Pricing Plans</h6>
                  <h3>Let's find a way together</h3>
                  <p>Reimagine how you reach, share and engage with your audience</p>
                  <div className="line"></div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              {/* Start Up Plan */}
              <div className="col-12 col-sm-8 col-md-4">
                <div className="single_price_plan wow fadeInUp" data-wow-delay="0.2s">
                  <div className="title">
                    <h3>Start Up</h3>
                    <p>Start a trial</p>
                    <div className="line"></div>
                  </div>
                  <div className="price">
                    <h4>$0</h4>
                  </div>
                  <div className="description">
                    <p><i className="lni lni-checkmark-circle"></i>2 QR Codes/month</p>
                    <p><i className="lni lni-checkmark-circle"></i>10 links/months</p>
                    <p><i className="lni lni-close"></i>1 Link-in-bio</p>
                  </div>
                  <div className="button"><a className="btn btn-success btn-2" href="">Get Started</a></div>
                </div>
              </div>
              {/* Enterprise Plan */}
              <div className="col-12 col-sm-8 col-md-4">
                <div className="single_price_plan wow fadeInUp" data-wow-delay="0.2s">
                  <div className="title">
                    <h3>Enterprise</h3>
                    <p>Unlimited Possibilities</p>
                    <div className="line"></div>
                  </div>
                  <div className="price">
                    <h4>$49.99</h4>
                  </div>
                  <div className="description">
                    <p>Everything in growth, plus</p>
                    <p><i className="lni lni-checkmark-circle"></i>1 year of click & scan data</p>
                    <p><i className="lni lni-checkmark-circle"></i>Custom campaign-level tracking</p>
                    <p><i className="lni lni-checkmark-circle"></i>City-level & device type click & scan data</p>
                    <p><i className="lni lni-checkmark-circle"></i>Mobile deep linking</p>
                    <p><i className="lni lni-checkmark-circle"></i>Unlimited Tools</p>
                  </div>
                  <div className="button"><a className="btn btn-info" href="">Get Started</a></div>
                </div>
              </div>
              {/* Small Business Plan (Popular) */}
              <div className="col-12 col-sm-8 col-md-4">
                <div className="single_price_plan active wow fadeInUp" data-wow-delay="0.2s">
                  {/* Side Shape*/}
                  <div className="side-shape"><img src="https://bootdey.com/img/popular-pricing.png" alt="" /></div>
                  <div className="title"><span>Popular</span>
                    <h3>Small Business</h3>
                    <p>For Small Business Team</p>
                    <div className="line"></div>
                  </div>
                  <div className="price">
                    <h4>$9.99</h4>
                  </div>
                  <div className="description">
                    <p>Everything in Free, Plus</p>
                    <p><i className="lni lni-checkmark-circle"></i>30 days of clicks & scan data</p>
                    <p><i className="lni lni-checkmark-circle"></i>Advanced qr code customizations</p>
                    <p><i className="lni lni-checkmark-circle"></i>Links and qr codes redirects</p>
                  </div>
                  <div className="button"><a className="btn btn-warning" href="">Get Started</a></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Sidebarlayout>
  )
}

export default Pricing;
