import React from 'react';
import './HomeHero.css';

const Homehero = () => {
  return (
    <div className="home-hero">
      <div className="container">
        <div className="row align-items-center home-hero">
          <div className="col-lg-6">
            <div className="Homehero-content">
              <h1 className='head-h1'>Build Proffesional webflow websites for startups.</h1>
              <p className='para_main'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim urna porttitor neque elementum cursus. Bibendum.</p>
              <div className="button-text-container">
                <a href="#" style={{ textDecoration: "none" }}>
                  <button className="connect-button">Let's Connect</button>
                </a>
                <div className='text-button-container'>
                  <p className="get-consult">Get Consultations</p>
                  <img src='/images/icons/button-icon.svg' alt='icon' className='button-icon img-fluid' />
                </div>
              </div>


              <div className="social-media-icons">
                <p className='get-consult'>Follow me <span className='span-line'>-------</span> </p>

                <a href="https://www.facebook.com/RazaFoundationPakistan?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                  <img src='/images/icons/Facebook-icon.svg' alt='Facebook' className='img-fluid' />
                </a>
                <a href="https://www.instagram.com/raza_foundation_?igsh=a2Vzb2ZnbnU2Yndw" target="_blank" rel="noopener noreferrer">
                  <img src='/images/icons/Instagram-icon.svg' alt='Instagram' className='img-fluid' />
                </a>
                <img src='/images/icons/twitter-icon.svg' alt='icons' className='img-fluid' />
                <img src='/images/icons/Linkedln-icon.svg' alt='icons' className='img-fluid' />
              </div>
            </div>
          </div>

          <div className="col-lg-6 d-flex mt-4">
            <img src="/images/creatives/home-branding-boy.png" alt="Banner" className="img-fluid mx-auto banner-img" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Homehero;
