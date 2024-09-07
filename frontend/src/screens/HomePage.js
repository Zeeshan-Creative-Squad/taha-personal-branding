import React from 'react'
import NewsAndUpdatesHero from '../components/NewsAndUpdatesHero/NewsAndUpdatesHero'
import VisionAndMission from '../components/VisionAndMission/VisionAndMission'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import CardTestimonial from '../components/OurServices/CardBoxServicesSection'
import Homehero from '../components/HomeHero/HomeHero'
// import Testimonials from '../components/Testimonials/Testimonials'
import WhatWe from '../components/WhatWeDo/whatWe'
import OurProcess from '../components/OurProcess/OurProcess';
import ContactForm from '../components/ContactForm/ContactForm';
import Sponsor from '../components/Sponsor/Sponsor';
import Testimonials from '../components/OurTestimonials/Testimonials';

const HomePage = () => {
  return (
    <div>
      <Homehero />
      <WhatWe />
      <Sponsor
      />
      <VisionAndMission
        // flexdirection="row-reverse"
        heading="Get 1 to 1 Consultation with"
        spanHead="Taha Sheikh"
        Para="Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries" homeTitle=""
        button="Get Consultation"
        image="/images/creatives/boy-about-image.png"

      />

      {/* <WhatWe  Heading="WHAT " heading="HOME STAGING" Para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Pellentesque habitant morbi tristique senectus et netus et malesuada fames something turpis egestas making better molestie. Nunc egestas erat lacus, vitae eleifend nisi eleifend making something realy good" homeTitle="" button="READ MORE" image="/images/creatives/slider-home--staging.png"
        shadeHeading="WE DO"
        background="transparent linear-gradient(313deg, #FFFFFF00 0%, #FFFFFE00 60%, #A5CD375C 100%, #bbff00 100%) 0% 0% no-repeat"/> */}

      <OurProcess heading="WHY " shadeHeading="CHOOSE US" />

      <CardTestimonial
        heading="MOST POPULAR "
        shadeHeading="News"
        spanHeading=""
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing"
        button="Learn more" />
      {/* <HappyCustomer /> */}

      <Testimonials />



      {/* <Testimonials heading="WHAT OUR " shadeHeading="CLIENT SAYS" /> */}

      {/* <HomeGallery homeSection={true}/> */}

      <NewsLetter />
      <ContactForm />

    </div>
  )
}

export default HomePage