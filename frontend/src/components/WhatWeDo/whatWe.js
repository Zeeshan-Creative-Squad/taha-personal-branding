import React from 'react';
import { Link } from 'react-router-dom';
import './whatWe.css'; // Import the external CSS file
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay,Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const WhatWe = (props) => {
  let linkTo = '#';

  switch (props.button) {
    case 'About Us':
      linkTo = '/about';
      break;
    case 'Contact Us':
      linkTo = '/contact';
      break;
    case 'Services':
      linkTo = '/services';
      break;
    case 'Donate Now':
      linkTo = '/donations';
      break;
    case 'Read More':
      linkTo = '/donations';
      break;
    case 'Blog':
      linkTo = '/blog';
      break;
    default:
      linkTo = '#'; // Default case
  }

  return (
    <div className="what-we-container">
      <div className='container'>
        <div className='what-we-main text-center'>
        <h1 className='head-h2'>{props.Heading}
        <span className='head-bg'>{props.shadeHeading}</span>
        </h1>
        
        <p className="para_main">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
        </div>
        
        <Swiper
          loop={true}
          spaceBetween={100}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          breakpoints={{
            280: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 1, // Only one slide visible at a time
            }
          }}
          modules={[Autoplay,Pagination]} // Register the Autoplay module
          className="swiper-container py-5 mx-0 w-100 px-2"
        >
          <SwiperSlide>
            <div className={`row ${props.flexdirection === 'row-reverse' ? 'flex-lg-row-reverse' : 'flex-lg-row'} flex-column`}>
              
              <div className="col-lg-6 right-section">
                <img src={props.image} className='img-fluid' alt='banner-img' />
              </div>
              <div className="col-lg-6 left-section">
                <div className='d-flex align-items-center text-and-button'>
                <button className='counting-btn'>01/03</button>
                <h1 className='head-h3'>{props.heading} </h1>
                </div>
                 
                <div className="d-flex flex-container">
                  <div className="text-container">
                    <div>
                      <p className='para_main'>{props.Para}</p>
                      <br />
                      <p className='bluepara'>{props.bluepara}</p>
                      {props.button && (
                        <div className="button-container">
                          <Link to={linkTo} className='button_secondary'>
                            {props.button}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`row ${props.flexdirection === 'row-reverse' ? 'flex-lg-row-reverse' : 'flex-lg-row'} flex-column`}>
              <div className="col-lg-6 right-section">
                <img src={props.image} className='img-fluid' alt='banner-img' />
              </div>
              <div className="col-lg-6 left-section">
              <div className='d-flex align-items-center text-and-button'>
                <button className='counting-btn'>01/03</button>
                <h1 className='head-h3'>{props.heading} </h1>
                </div>
                <div className="d-flex flex-container">
                  <div className="text-container">
                    <div>
                      <p className='para_main'>{props.Para}</p>
                      <br />
                      <p className='bluepara'>{props.bluepara}</p>
                      {props.button && (
                        <div className="button-container">
                          <Link to={linkTo} className='button_secondary'>
                            {props.button}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`row ${props.flexdirection === 'row-reverse' ? 'flex-lg-row-reverse' : 'flex-lg-row'} flex-column`}>
              <div className="col-lg-6 right-section">
                <img src={props.image} className='img-fluid' alt='banner-img' />
              </div>
              <div className="col-lg-6 left-section">
              <div className='d-flex align-items-center text-and-button'>
                <button className='counting-btn'>01/03</button>
                <h1 className='head-h3'>{props.heading} </h1>
                </div>
                <div className="d-flex flex-container">
                  <div className="text-container">
                    <div>
                      <p className='para_main'>{props.Para}</p>
                      <br />
                      <p className='bluepara'>{props.bluepara}</p>
                      {props.button && (
                        <div className="button-container">
                          <Link to={linkTo} className='button_secondary'>
                            {props.button}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
         
          {/* Add more SwiperSlides if you have more sections */}
        </Swiper>
      </div>
    </div>
  );
};

export default WhatWe;
