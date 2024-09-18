import React, { useState } from "react";
import "./BlogsHero.css";

const BlogsHero = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="blogs-hero">
      <div className="container">
        <div className="row align-items-center home-hero">
          <div className="col-lg-6">
            <div className="Homehero-content">
              <h3 className="spanHead">LATEST BLOG</h3>
              <h1 className="head-h1">
                Resources and tips for your business.
              </h1>
              <p className="para_main">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                urna porttitor neque elementum cursus. Bibendum.
              </p>
              <div className="button-area-container mt-4">
                <form className="inp-container d-md-flex d-none align-items-center justify-content-between">
                  <input
                    required
                    type="email"
                    value={email}
                    maxLength="56"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                  />
                  <button className="connect-button" type="submit">
                    Subscribe
                  </button>
                </form>
                <form className="d-md-none d-flex flex-column align-items-center justify-content-between">
                  <input
                    required
                    type="email"
                    value={email}
                    maxLength="56"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address"
                    className="inp-container px-3 py-2"
                  />
                  <button className="connect-button mt-3" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>

              {/* <div className="social-media-icons">
                                <p className='get-consult'>Follow me <span className='span-line'>-------</span> </p>

                                <a href="https://www.facebook.com/RazaFoundationPakistan?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                    <img src='/images/icons/Facebook-icon.svg' alt='Facebook' className='img-fluid' />
                                </a>
                                <a href="https://www.instagram.com/raza_foundation_?igsh=a2Vzb2ZnbnU2Yndw" target="_blank" rel="noopener noreferrer">
                                    <img src='/images/icons/Instagram-icon.svg' alt='Instagram' className='img-fluid' />
                                </a>
                                <img src='/images/icons/twitter-icon.svg' alt='icons' className='img-fluid' />
                                <img src='/images/icons/Linkedln-icon.svg' alt='icons' className='img-fluid' />
                            </div> */}
            </div>
          </div>

          <div className="col-lg-6 d-flex mt-4">
            <img
              src="/images/creatives/blog-banner.png"
              alt="Banner"
              className="img-fluid mx-auto blog-banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsHero;
