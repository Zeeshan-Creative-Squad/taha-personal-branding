import React from "react";
import { useState } from "react";
import "./DigitalServices.css";
import { Links1, Links2, Links3 } from "../Navigationlinks";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";
import img4 from "./plus.svg";
import img5 from "./img4.svg";
import img6 from "./img6.svg";
import img7 from "./img7.svg";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";

const cardData = [
  {
    img: '/images/creatives/about-page-icons.svg',
    title: "Commitment",
    content: "Lorem ipsum dolor sit amet elit met consectetur adipiscing, sed do aliqua eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet elit met consectetur adipiscing, sed do aliqua ",
    link: "#",
  },
  {
    img: '/images/creatives/about-page-icons.svg',
    title: "Customer first",
    content: "Lorem ipsum dolor sit amet elit met consectetur adipiscing, sed do aliqua eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet elit met consectetur adipiscing, sed do aliqua ",
    link: "#",
  },
  {
    img: '/images/creatives/about-page-icons.svg',
    title: "Communication",
    content: "Lorem ipsum dolor sit amet elit met consectetur adipiscing, sed do aliqua eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet elit met consectetur adipiscing, sed do aliqua",
    link: "#",
  },
  {
    img: '/images/creatives/about-page-icons.svg',
    title: "Openness",
    content: "Lorem ipsum dolor sit amet elit met consectetur adipiscing, sed do aliqua eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet elit met consectetur adipiscing, sed do aliqua ",
    link: "#",
  },
  {
    img: '/images/creatives/about-page-icons.svg',
    title: "Empathy",
    content: "Lorem ipsum dolor sit amet elit met consectetur adipiscing, sed do aliqua eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet elit met consectetur adipiscing, sed do aliqua ",
    link: "#",
  },
  {
    img: '/images/creatives/about-page-icons.svg',
    title: "Empathy",
    content: "Lorem ipsum dolor sit amet elit met consectetur adipiscing, sed do aliqua eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet elit met consectetur adipiscing, sed do aliqua ",
    link: "#",
  },
  {
    img: '/images/creatives/about-page-icons.svg',
    title: "Empathy",
    content: "Lorem ipsum dolor sit amet elit met consectetur adipiscing, sed do aliqua eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet elit met consectetur adipiscing, sed do aliqua ",
    link: "#",
  },
  {
    img: '/images/creatives/about-page-icons.svg',
    title: "Empathy",
    content: "Lorem ipsum dolor sit amet elit met consectetur adipiscing, sed do aliqua eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet elit met consectetur adipiscing, sed do aliqua ",
    link: "#",
  },
]


const DigitalServices = ({ paddingTop, paddingBottom }) => (
  <div
    style={{
      paddingTop: paddingTop && paddingTop,
      paddingBottom: paddingBottom && paddingBottom,
    }}
    className="Services"
  >
    <Container  >
      <h1 className='head-h1 text-center'>What People <span className='spanHead'>Say About Me</span></h1>
      <p className="para_main text-center">Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries</p>
      <div className="row text-center justify-content-center row gx-lg-4 g-3 pt-2 mb-0 gy-4 what-people-say-container">

        <Swiper
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay, Pagination]}
          observer={true}
          observeParents={true}
          parallax={true}
          breakpoints={{
            // Mobile: Small screens (phones)
            320: {
              slidesPerView: 1,
            },
            // Tablets in portrait mode
            640: {
              slidesPerView: 1,
            },
            // Tablets in landscape mode
            768: {
              slidesPerView: 2,
            },
            // Larger tablets or smaller laptops
            1024: {
              slidesPerView: 3,
            },
            // Desktops or larger screens
            1300: {
              slidesPerView: 3,
            },
          }}
        >
          {cardData.map((ele, index) => (
            <SwiperSlide key={index} className='services-card-content'>
              <ServiceCardBox
                img={ele.img}
                title={ele.title}
                content={ele.content}
                link={ele.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <ServiceItem
          navlink={Links1}
          hoveredimage={img5}
          image={img1}
          title="Design & Build"
          description="From intuitive navigation to seamless responsiveness across devices, we prioritize every aspect to deliver an exceptional user experience through exceptional web design & development services."
          link="/search-engine-optimization-service-in-canada/"
        />
        <ServiceItem
          navlink={Links2}
          hoveredimage={img6}
          image={img2}
          title="Create & Market"
          description="Make the world talk about you with Creative Squad, the leading digital marketing powerhouse in Canada. Our marketing solutions cover everything from strategic ad campaigns to management."
          link="/search-engine-marketing-service-in-toronto/"
        />
        <ServiceItem
          navlink={Links3}
          hoveredimage={img7}
          image={img3}
          title="Automate & Scale"
          description="Leverage the potential of automation and scalability with Creative Squad, the premier digital marketing agency in Canada. Enhance your brand's online impact through our wide-ranging services."
          link="/ecommerce-development-service-in-canada/"
        /> */}
      </div>
    </Container>
  </div>
);

function ServiceCardBox({
  img = '/images/icons/card-icon.svg',
  title = "",
  content = "",
  link = ""

}) {
  const navigate = useNavigate()
  return (
    <div className='service-card text-center'>

      <img src={img} alt='card icon' className='img-fluid mb-4 mb-xxl-5 service-box-img' />
      <h5 className='head-h2' style={{ fontSize: "24px" }}>{title}</h5>
      <p className='body-paragraph my-4'>{content}</p>
      {/* <p 
          className='service-card-anchor color-yellow'
          onClick={()=>{navigate(link)}}
          >
              Read More 
              <img src='/images/icons/arrow-right-yellow.svg' alt='arrow right '/>
          </p> */}
    </div>
  )
}

const ServiceItem = ({ image, title, description, navlink, hoveredimage }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="col-lg-4 px-xl-2 px-xxl-4 ">
      <div>
        <div onMouseLeave={handleMouseLeave} className="box">
          {!isHovering && (
            <div className="d-flex justify-content-start  pt-5  mb-5 pb-3 ">
              <div className="px-3 mx-4 m-2">
                <img src={image} className="img-fluid " alt={title} />
              </div>
            </div>
          )}
          {isHovering && (
            <div className="d-flex justify-content-start  pt-5 overlay  mb-3 pb-3 ">
              <div>
                <div className=" d-flex justify-content-start px-3 mx-4 m-2 mt-3 pt-1">
                  <img src={hoveredimage} className="img-fluid " alt={title} />{" "}
                </div>
                <div className=" d-flex justify-content-start px-3 mx-4 mt-5 m-2">
                  <h2
                    style={{ color: "white" }}
                    className="ServicesTitle text-start"
                  >
                    {title}
                  </h2>
                </div>
              </div>
            </div>
          )}
          {isHovering && (
            <div className="hoveredbox">
              <ul>
                {navlink.map((e) => (
                  <li>
                    <Link
                      to={e.path}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {e.title}
                    </Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!isHovering && (
            <div className="originalbox">
              <h2 className="ServicesTitle px-3 mx-4 text-start"> {title} </h2>
              <div className="text-start px-4 mx-3 pe-2 mt-4 pt-1">
                <p className="ServicesPara "> {description} </p>
                <button
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="ServicesBtn "
                >
                  Learn More <img className="" src={img4} alt="" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default DigitalServices;
