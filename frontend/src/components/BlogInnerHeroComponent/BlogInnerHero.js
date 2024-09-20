import React from "react";
import "./BlogInnerHero.css";

const BlogInnerHero = () => {
  return (
    <div className="blog-inner-hero">
      <div className="container">
        <div className="row align-items-center blog-inner-container">
          <div className="BlogInner-content">
            <button className="connect-button">Web Design</button>
            <h1 className="head-h1">
              The best design tools in 2021 for prototyping.
            </h1>
          </div>

          <div>

          </div>

          <div className="col-lg-6 d-flex mt-4 banner-section">
            <img
              src="/images/creatives/blog-inner.png"
              alt="Banner"
              q1
              className="img-fluid mx-auto banner-blog"
            />
          </div>

          <div className="col-lg-6 d-flex mt-4 banner-section">
            <img
              src="/images/creatives/blog-inner.png"
              alt="Banner"
              className="img-fluid mx-auto banner-blog"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogInnerHero;
