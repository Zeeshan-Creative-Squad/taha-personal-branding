import React from 'react';
import './HomeHero.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";

const Homehero = () => {
  return (
    <div className='home-hero'>
      <div className="containe">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay, Pagination]}
          observer={true}
          observeParents={true}
          parallax={true}
          className="testimonials-list "
          id="articles-cards-slider"
        >
          <SwiperSlide className='w-100'>
            <div className="row align-items-center home-hero">
              <div className="col-lg-12 text-center">
                <div className="Homehero-content text-center">
                  <h1 className='head-h1'>Natural Home Staging</h1>
                  <p className='para_main'>Convallis vivamus at cras porta nibh velit aliquam eget in alht wapon okey</p>
                  <a href="/contact" style={{ textDecoration: "none" }}><button className="connect-button">BOOK YOUR CONSULTATION</button></a>


                  {/* <div className="social-media-icons d-lg-none justify-content-center">
                    <img src='/images/icons/Titktok-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Youtube-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Facebook-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Instagram-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Linkedln-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Whatsapp-icon.svg' alt='icons' className='img-fluid' />
                  </div> */}
                </div>
              </div>
            </div>
            
          </SwiperSlide>

          <SwiperSlide>
            <div className="row align-items-center home-hero">
              <div className="col-lg-12 text-center">
                <div className="Homehero-content text-center">
                  <h1 className='head-h1'>Natural Home Staging</h1>
                  <p className='para_main'>Convallis vivamus at cras porta nibh velit aliquam eget in alht wapon okey</p>
                  <a href="/contact" style={{ textDecoration: "none" }}><button className="connect-button">BOOK YOUR CONSULTATION</button></a>


                  {/* <div className="social-media-icons d-lg-none justify-content-center">
                    <img src='/images/icons/Titktok-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Youtube-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Facebook-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Instagram-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Linkedln-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Whatsapp-icon.svg' alt='icons' className='img-fluid' />
                  </div> */}
                </div>
              </div>
            </div>
            
          </SwiperSlide>

          <SwiperSlide>
            <div className="row align-items-center home-hero">
              <div className="col-lg-12 text-center">
                <div className="Homehero-content text-center">
                  <h1 className='head-h1'>Natural Home Staging</h1>
                  <p className='para_main'>Convallis vivamus at cras porta nibh velit aliquam eget in alht wapon okey</p>
                  <a href="/contact" style={{ textDecoration: "none" }}><button className="connect-button">BOOK YOUR CONSULTATION</button></a>


                  {/* <div className="social-media-icons d-lg-none justify-content-center">
                    <img src='/images/icons/Titktok-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Youtube-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Facebook-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Instagram-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Linkedln-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Whatsapp-icon.svg' alt='icons' className='img-fluid' />
                  </div> */}
                </div>
              </div>
            </div>
            
          </SwiperSlide>

          {/* <SwiperSlide>
            <div className="row align-items-center home-hero">
              <div className="col-lg-6">
                <div className="Homehero-content">
                  <h4 className='main-head'>EID-UL-ADHA 2024</h4>
                  <h1 className='head-h1'>Online Collective Qurbani 2024</h1>
                  <p className='para_main'>Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi tristique aliquam ultrices sit cras nascetur in elementum placerat sed viverra risus in turpis vitae sed est tincidunt vitae.</p>
                  <a href="/contact" style={{ textDecoration: "none" }}><button className="connect-button">Book Now</button></a>

                  <div className="social-media-icons d-lg-none">
                    <img src='/images/icons/Titktok-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Youtube-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Facebook-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Instagram-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Linkedln-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Whatsapp-icon.svg' alt='icons' className='img-fluid' />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="/images/creatives/banner-img.png" alt="Banner" className="img-fluid" />
              </div>
            </div>
          </SwiperSlide> */}

          {/* <SwiperSlide>
            <div className="row align-items-center home-hero">
              <div className="col-lg-6">
                <div className="Homehero-content">
                  <h4 className='main-head'>EID-UL-ADHA 2024</h4>
                  <h1 className='head-h1'>Online Collective Qurbani 2024</h1>
                  <p className='para_main'>Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi tristique aliquam ultrices sit cras nascetur in elementum placerat sed viverra risus in turpis vitae sed est tincidunt vitae.</p>
                  <a href="/contact" style={{ textDecoration: "none" }}><button className="connect-button">Book Now</button></a>
                  <div className="social-media-icons d-lg-none">
                    <img src='/images/icons/Titktok-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Youtube-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Facebook-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Instagram-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Linkedln-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Whatsapp-icon.svg' alt='icons' className='img-fluid' />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="/images/creatives/banner-img.png" alt="Banner" className="img-fluid" />
              </div>
            </div>
          </SwiperSlide> */}

          {/* <SwiperSlide>
            <div className="row align-items-center home-hero">
              <div className="col-lg-6">
                <div className="Homehero-content">
                  <h4 className='main-head'>EID-UL-ADHA 2024</h4>
                  <h1 className='head-h1'>Online Collective Qurbani 2024</h1>
                  <p className='para_main'>Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi tristique aliquam ultrices sit cras nascetur in elementum placerat sed viverra risus in turpis vitae sed est tincidunt vitae.</p>
                  <a href="/contact" style={{ textDecoration: "none" }}><button className="connect-button">Book Now</button></a>
                  <div className="social-media-icons d-lg-none">
                    <img src='/images/icons/Titktok-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Youtube-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Facebook-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Instagram-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Linkedln-icon.svg' alt='icons' className='img-fluid' />
                    <img src='/images/icons/Whatsapp-icon.svg' alt='icons' className='img-fluid' />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="/images/creatives/banner-img.png" alt="Banner" className="img-fluid" />
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>

        {/* <div className="swiper-pagination"></div> */}

        {/* <div className="social-media-icons d-none d-lg-flex">
          <img src='/images/icons/Titktok-icon.svg' alt='icons' className='img-fluid' />
          <img src='/images/icons/Youtube-icon.svg' alt='icons' className='img-fluid' />
          <img src='/images/icons/Facebook-icon.svg' alt='icons' className='img-fluid' />
          <img src='/images/icons/Instagram-icon.svg' alt='icons' className='img-fluid' />
          <img src='/images/icons/Linkedln-icon.svg' alt='icons' className='img-fluid' />
          <img src='/images/icons/Whatsapp-icon.svg' alt='icons' className='img-fluid' />
        </div> */}
      </div>
    </div>
  );
};

export default Homehero;
