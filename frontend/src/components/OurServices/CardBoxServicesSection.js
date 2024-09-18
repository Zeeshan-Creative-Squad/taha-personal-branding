import React, { useState, useEffect } from "react";
import "./CardBoxServicesSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import CardBox from "./CardBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

function CardTestimonial({
  subHeading,
  heading,
  content,
  shadeHeading,
  button,
}) {
  const [recentBlogs, setRecentBlogs] = useState([]);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  let blogAPICalledId = false;
  let allBlogsCalled = false;

  const getAllBlogs = async () => {
    if (allBlogsCalled) return;
    allBlogsCalled = true;

    setLoading(true);

    axios
      .get(`/blogs`, {})
      .then((res) => {
        if (res.data.status === "success") {
          let Updated_recent_blogs = [];

          res.data.data.forEach((item) => {
            Updated_recent_blogs.push({
              id: item.blog_id,
              slug_url: item.slug_url,
              logo: item.blog_image,
              content: item.brief_paragraph,
              blog_description: item.title,
              date: item.published_date,
            });
          });

          setRecentBlogs(Updated_recent_blogs);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  const convertToSlug = (str) => {
    return str.toLowerCase().replace(/\s+/g, "-");
  };

  const redirectUserToBlog = (slug_url) => {
    if (!slug_url) return;
    navigate(`/blogs/${slug_url}`);
  };

  const blogs = [
    {
      id: 1,
      date: "April 13, 2023",
      title: "Design, technology, and the things I cherish",
      imageUrl: "/images/creatives/popular-blog-image.png",
    },
    {
      id: 2,
      date: "April 13, 2023",
      title: "Design, technology, and the things I cherish",
      imageUrl: "/images/creatives/popular-blog-image.png",
    },
    {
      id: 3,
      date: "April 13, 2023",
      title: "Design, technology, and the things I cherish",
      imageUrl: "/images/creatives/popular-blog-image.png",
    },
    {
      id: 4,
      date: "April 13, 2023",
      title: "Design, technology, and the things I cherish",
      imageUrl: "/images/creatives/popular-blog-image.png",
    },
  ];

  return (
    <div className="blog-section">
      <div className="container">
        <h2 className="head-h1">{heading}</h2>
        <p className="para_main">
        {content}
        </p>

        <div className="blog-list">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-item">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="blog-image"
              />
              <div className="blog-content">
                <p className="blog-date">{blog.date}</p>
                <h3 className="blog-title">{blog.title}</h3>
              </div>
            </div>
          ))}
          <button className="connect-button w-100">{button}</button>
        </div>
      </div>
    </div>
  );
}

export default CardTestimonial;
