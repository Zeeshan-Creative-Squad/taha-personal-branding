import React from "react";
import "./BlogInner.css";

function BlogInner({ text, blogContent, date, Heading }) {
  return (
    <>
      <div className="main-section-container">
        <div className="container">
          {/* <div className="main-heading">
      <div className='card-icon-text d-flex'>
          <img src='/images/icons/schedule-icon.svg' alt='icon' className='cards-some-icon img-fluid'/>
          <p className='text-for-box'>{date}</p>

          <img src='/images/icons/profile-icon.svg' alt='icon' className='cards-some-icon img-fluid'/>
          <p className='text-for-box'>{Heading}</p>
        </div>
        <h1 className='head-h2'>INTERIOR DESIGN TRENDS IN 2016</h1>
      </div> */}

          <div className="case-study-inner-section">
            <div className="Heading-stuff mt-4">
              <h1 className="head-h1">Building an experience</h1>
              <p className="para_main">
                In this section, we offer a glimpse into the conceptualization
                phase of our projects through wireframes. Wireframes are the
                architectural blueprints of digital experiences, representing
                the foundation upon which we build remarkable websites. Here,
                you can explore our thoughtfully crafted wireframes that lay the
                groundwork for seamless and user-friendly designs. ‍
              </p>
            </div>

            <div className="Heading-stuff mt-4">
              <h1 className="head-h1">Match the brand</h1>
              <p className="para_main">
                User-Centric Design: Our wireframes prioritize user experience,
                mapping out intuitive navigation, content hierarchy, and
                interaction points that put users at the forefront of design.
                Responsive Blueprint: We've meticulously planned for
                responsiveness, ensuring that our designs adapt seamlessly to
                various screen sizes, guaranteeing a consistent experience on
                desktops, tablets, and mobile devices. ‍
              </p>
              <p className="para_main">
                Strategic Content Placement: Our wireframes reveal the strategic
                placement of content, imagery, and call-to-action elements,
                optimizing engagement and conversion pathways. Iterative
                Refinement: Crafting these wireframes involved numerous
                iterations and collaborative feedback sessions to ensure they
                perfectly aligned with our client's vision and objectives.
              </p>
            </div>

            <div className="Heading-stuff mt-4">
              <h1 className="head-h1">Highlights</h1>
              <p className="para_main">
                “User engagement and experience has become a major focus for any
                web-based service in recent years”
              </p>
            </div>
            <div className="Heading-stuff mt-4">
              <h1 className="head-h3">Strategy for the digital brand</h1>
              <p className="para_main">
                User-Centric Design: Our wireframes prioritize user experience,
                mapping out intuitive navigation, content hierarchy, and
                interaction points that put users at the forefront of design.
                Responsive Blueprint: We've meticulously planned for
                responsiveness, ensuring that our designs adapt seamlessly to
                various screen sizes, guaranteeing a consistent experience on
                desktops, tablets, and mobile devices. Strategic Content
                Placement: Our wireframes reveal the strategic placement of
                content, imagery, and call-to-action elements, optimizing
                engagement and conversion pathways. Iterative Refinement:
                Crafting these wireframes involved numerous iterations and
                collaborative feedback sessions to ensure they perfectly aligned
                with our client's vision and objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default BlogInner;
