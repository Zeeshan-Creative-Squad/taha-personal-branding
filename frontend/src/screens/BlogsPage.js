import React from "react";
import BlogsHero from "../components/BlogsHeroComponent/BlogsHero";
import CardTestimonial from "../components/OurServices/CardBoxServicesSection";
import ConnectPopup from "../components/OurTestimonials/ConnectPopup";

const BlogsPage = () => {
  return (
    <div>
      <BlogsHero />

      <CardTestimonial
        heading="Design, technology, and the things I cherish "
        // shadeHeading="News"
        spanHeading=""
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing"
        button="Learn more"
      />

      <ConnectPopup />
    </div>
  );
};

export default BlogsPage;
