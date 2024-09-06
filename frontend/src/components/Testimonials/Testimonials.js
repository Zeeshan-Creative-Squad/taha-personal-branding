import "./Testimonials.css"
import React,{useState} from "react";
import { Navigation, Autoplay, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import TestimonialCard from "./TestimonialCard"

const testimonialData = [
  {
    clientImg:"/images/icons/testimonial-male.svg",
    clientName:"JOHN DOE",
    clientPostion: "CEO Finance Theme Group",
    clientReview:"Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa"
  },
  {
    clientImg:"/images/icons/testimonial-male.svg",
    clientName:"JOHN DOE",
    clientPostion: "CEO Finance Theme Group",
    clientReview:"Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa"
  },
  {
    clientImg:"/images/icons/testimonial-male.svg",
    clientName:"JOHN DOE",
    clientPostion: "CEO Finance Theme Group",
    clientReview:"Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa"
   },
  {
    clientImg:"/images/icons/testimonial-male.svg",
    clientName:"JOHN DOE",
    clientPostion: "CEO Finance Theme Group",
    clientReview:"Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa"
  },
  {
    clientImg:"/images/icons/testimonial-male.svg",
    clientName:"JOHN DOE",
    clientPostion: "CEO Finance Theme Group",
    clientReview:"Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa"
  },
  {
    clientImg:"/images/icons/testimonial-male.svg",
    clientName:"JOHN DOE",
    clientPostion: "CEO Finance Theme Group",
    clientReview:"Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa"
   },
  // {
  //   clientImg:"/images/icons/testimonial-male.svg",
  //   clientName:"Sara Ahmed",
  //   clientPostion: "CEO Finance Theme Group",
  //   clientReview:"Creative Fusion's app development team brought our idea to life with precision and creativity. The app runs smoothly on all devices, and our users love it. Highly recommend their services!"
  // },
  // {
  //   clientImg:"/images/icons/testimonial-male.svg",
  //   clientName:"Bilal Hussain",
  //   clientPostion: "CEO Finance Theme Group",
  //   clientReview:"Our partnership with Creative Fusion has been fantastic. Their performance marketing strategies have significantly boosted our online presence, leading to higher engagement and sales"
  // },
  // {
  //   clientImg:"/images/icons/testimonial-male.svg",
  //   clientName:"Zara Ali",
  //   clientPostion: "CEO Finance Theme Group",
  //   clientReview:"The team at Creative Fusion nailed our branding project. They captured our vision perfectly, creating a brand identity that truly represents our values and resonates with our audience."
  // },
  // {
  //   clientImg:"/images/icons/testimonial-male.svg",
  //   clientName:"Fatima Shah",
  //   clientPostion: "CEO Finance Theme Group",
  //   clientReview:"From start to finish, Creative Fusion was professional, creative, and detail-oriented. Their content creation and optimization services have greatly enhanced our online visibility."
  // }
] 

function Testimonials(props) {



  return (
    <div className="Testimonials-container py-5">
      <div className="contain w-100 container-fluid py-4">
    <div className=" d-flex align-items-center w-100">
      <div className="col-12 text-center px-0">
        <h3 className="head-h1 mb-2">{props.heading}
          <span className="head-bg">{props.shadeHeading}</span>
        </h3>
        <p className="body-paragraph my-4" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has. </p>
        

        <div className="card-list" style={{position:"relative"}}>

        <Swiper
        spaceBetween={0}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false
        }}
        modules={[Navigation, Autoplay, Parallax]}
        observer={true}
        observeParents={true}
        parallax={true}
        breakpoints={{
          280: {
            slidesPerView: 1,
          },
          1450: {
            slidesPerView: 3,
          }
        }}
        className="testimonials-list py-5 mt-2"
        id="testimonial-cards-slider"
      >
        {testimonialData.map((clientData, ind) => (
          <SwiperSlide key={ind} className="pt-5 px-3 px-sm-0">
            <TestimonialCard
              clientImg={clientData.clientImg}
              clientName={clientData.clientName}
              clientReview={clientData.clientReview}
              clientPostion={clientData.clientPostion}
            />
          </SwiperSlide>
        ))}
      </Swiper>
        
        </div>
        
      </div>
      </div>
  </div>
</div>
  )
}

export default Testimonials