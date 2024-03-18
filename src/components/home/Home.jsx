import React, { useState } from 'react';
import Sidebarlayout from '../Layout/Sidebarlayout';
import './home.css';
import Image1Img from '../assests/image1.jpg';
import Image2Img from '../assests/image2.jpg';
import Image3Img from '../assests/image3.jpg';


function Home() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [clickCount, setClickCount] = useState(0);
  const [tableData, setTableData] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/urlshortner/url-shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          longUrl: longUrl,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`URL shortening failed! Status: ${response.status}`);
      }
  
      const responseData = await response.json(); 
      const { shortUrl, clickCount } = responseData; 
  
      setTableData([...tableData, { longUrl, shortUrl, clickCount }]);
      setLongUrl('');
      setShortUrl('');
      setClickCount(0);
      alert('the shorturl is now available');
      e.target.reset();
    } catch (error) {
      console.error('URL shortening error:', error.message);
    }
  };
  


   
  return (
    <Sidebarlayout>
      <div>
        <h1 >Free URL Shortener</h1>
        <div className="home-container-fluid">
          <div className="home-row">
            <div className="home-col-lg-12">
              <h2>Everything you need to get the job done</h2>
            </div>
          </div>
        </div>
        <div className="home-col-lg-9">
          <br />
          <h3>Shorten a long link</h3>
          <br />
          <h5>Paste a long URL</h5>
          <form onSubmit={handleFormSubmit}
          className="home-d-flex" role="home-search">
            <input 
            className="form-control me-2"
             type="search"
              placeholder="Example: https://super-long-link.com/shorten.it" 
              aria-label="disabled" 
              onChange={(e) => setLongUrl(e.target.value)}
              />
            <button className="btn btn-outline-success" type="submit">submit</button>
          </form>
          <br />
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Long Url</th>
                <th scope="col">Short Url</th>
                <th scope="col">Click Count</th>
              </tr>
            </thead>
            <tbody className="hometable-group-divider">
            {tableData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.longUrl}</td>
                                <td>{data.shortUrl}</td>
                                <td>{data.clickCount}</td>
                            </tr>
                        ))}
            </tbody>
          </table>
          <div className="col-lg-12">
            <h4><strong>Instill unbreakable confidence with every link</strong></h4>
            <p>Build strong brand credibility by customizing your links with our trusted link shortener.</p>
          </div>
          <div className="col-lg-12">
          <div className="card mb-3" style={{ maxWidth: "940px", marginLeft: "150px" }}> 
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://free-url-shortener.rb.gy/url-shortener.png" className="img-fluid rounded-start" alt="url-shortner-png" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title"><strong>A fast and simple URL shortener</strong></h5>
                    <p className="card-text">Free URL Shortener for transforming long, ugly links into nice, memorable and trackable short URLs. Use it to shorten links for any social media platforms, blogs, SMS, emails, ads, or pretty much anywhere else you want to share them. Twitter, Facebook, YouTube, Instagram, WhatsApp, emails, SMS, videos. RB.GY is the best free alternative to generic URL shorteners like bitly and tinyurl. After shortening the URL, check how many clicks it received.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="mgb-40 padb-30 auto-invert line-b-4 align-center">
            <h4 className="font-cond-l fg-accent lts-md mgb-10">Not Yet Convinced?</h4>
            <h2 className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg">Read Customer Reviews</h2>
          </div>
          <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
            <li>
              <img src={Image1Img} className="wpx-100 img-round mgb-20" alt="Customer review 1 " />
              <p className="fs-110 font-cond-l">"Quite recently I started using this URL Shortener app to shorten the URL of many videos. URL Shortener is required to send shorter links to open various videos and their features."</p>
              <h5 className="font-cond mgb-5 fg-text-d fs-130">Martha Stewart</h5>
              <small className="font-cond case-u lts-sm fs-80 fg-text-l">Business Woman - New York</small>
            </li>
            <li>
              <img src={Image2Img} className="wpx-100 img-round mgb-20" alt="Customer review 2" />
              <p className="fs-110 font-cond-l">"URL Shortener is one of the very helpful application in my mobile phone and I guess it''s also useful for you if you are a YouTuber, a Blogger, a Affilate Marketer or you use any online platform as a service provider. "</p>
              <h5 className="font-cond mgb-5 fg-text-d fs-130">Ariana Menage</h5>
              <small className="font-cond case-u lts-sm fs-80 fg-text-l">Recording Artist - Los Angeles</small>
            </li>
            <li>
              <img src={Image3Img}className="wpx-100 img-round mgb-20" alt="Customer review 3" />
              <p className="fs-110 font-cond-l">" this application reduces your large link size and make a perfect link as well as the main feature of this application that it''s have record all your links in an row and it show that how many peoples click it."</p>
              <h5 className="font-cond mgb-5 fg-text-d fs-130">Sean Carter</h5>
              <small className="font-cond case-u lts-sm fs-80 fg-text-l">Fund Manager - Chicago</small>
            </li>
          </ul>
       

        </div>
      </div>
      
    </Sidebarlayout>
  );
}

export default Home;
