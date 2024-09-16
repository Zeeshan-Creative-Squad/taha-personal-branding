import React from 'react'
import "./Sponsor.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function Sponsor({ offOnSlide }) {
  return (
    <div className='sponsor-container standard-margin-space md-py-3 py-1 '>
      <div className='container'>
        <div className='py-2 '></div>
        <div className="companies-logo-box ">
          <Swiper
            spaceBetween={10}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            breakpoints={{
              200: {
                slidesPerView: 1,
              },
              550: {
                slidesPerView: 2,
              },
              800: {
                slidesPerView: 3,
              },
              1000: {
                slidesPerView: 4,
              },
            }}
            className={`mx-auto ${offOnSlide && "hideOnNav"}`}
          >
            <SwiperSlide>
              <img src="/images/creatives/sponsor.png" alt="sponsor icon" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/creatives/sponsor.png" alt="sponsor icon" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/creatives/sponsor.png" alt="sponsor icon" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/creatives/sponsor.png" alt="sponsor icon" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/creatives/sponsor.png" alt="sponsor icon" />
            </SwiperSlide>

          </Swiper>
        </div>
        <div className='py-2'></div>
      </div>
    </div>
  )
}

export default Sponsor

