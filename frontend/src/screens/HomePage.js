import React from 'react'
import VisionAndMission from '../components/VisionAndMission/VisionAndMission'
import CardTestimonial from '../components/OurServices/CardBoxServicesSection'
import Homehero from '../components/HomeHero/HomeHero'
import ProjectsDone from '../components/ProjectsDones/ProjectsDone'
import OurProcess from '../components/OurProcess/OurProcess';
import Sponsor from '../components/Sponsor/Sponsor';
import ConnectPopup from '../components/OurTestimonials/ConnectPopup';
import ConsultationServices from '../components/ConsultationServices/ConsultationServices'
import HomeGallery from '../components/HomeGallerySection/HomeGallery'
import DesignGrids from '../components/DesignGrids/DesignGrids'
import SectionComponent from '../components/SectionComponent/SectionComponent';
import DigitalServices from "../components/360 Digital Services/DigitalServices";

const HomePage = () => {
  return (
    <div>
      <Homehero />
      <ProjectsDone />
      <Sponsor
      />
      <ConsultationServices />
      <SectionComponent
        heading="Get 1 to 1 Consultation with"
        spanHead="Taha Sheikh"
        Para="Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries" homeTitle=""
        button="Get Consultation"
        image="/images/creatives/boy-about-image.png" />

      <VisionAndMission flexdirection="row-reverse" Para="Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries finance software has love the financial haveing on centuries"
        image="/images/creatives/about-banner-boy.png"
        heading="Join My  "
        spanHead="Community"
        button="Join Now"
        background="#131313" />


      <DesignGrids />
      <DigitalServices />

      {/* <WhatWe  Heading="WHAT " heading="HOME STAGING" Para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Pellentesque habitant morbi tristique senectus et netus et malesuada fames something turpis egestas making better molestie. Nunc egestas erat lacus, vitae eleifend nisi eleifend making something realy good" homeTitle="" button="READ MORE" image="/images/creatives/slider-home--staging.png"
        shadeHeading="WE DO"
        background="transparent linear-gradient(313deg, #FFFFFF00 0%, #FFFFFE00 60%, #A5CD375C 100%, #bbff00 100%) 0% 0% no-repeat"/> */}

      {/* <OurProcess heading="WHY " shadeHeading="CHOOSE US" /> */}

      <CardTestimonial
        heading="I help move your business forward with design. "
        shadeHeading=""
        spanHeading=""
        // content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing"
        button="Learn more" />
      {/* <HappyCustomer /> */}

      {/* <ConnectPopup /> */}



      {/* <Testimonials heading="WHAT OUR " shadeHeading="CLIENT SAYS" /> */}

      {/* <HomeGallery homeSection={true}/> */}

      {/* <NewsLetter />
      <ContactForm /> */}

    </div>
  )
}

export default HomePage