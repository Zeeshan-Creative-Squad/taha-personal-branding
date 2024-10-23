import React from 'react'
import VisionAndMission from '../components/VisionAndMission/VisionAndMission'
import CardTestimonial from '../components/OurServices/CardBoxServicesSection'
import Homehero from '../components/HomeHero/HomeHero'
import ProjectsDone from '../components/ProjectsDones/ProjectsDone'
import Sponsor from '../components/Sponsor/Sponsor';
import ConnectPopup from '../components/OurTestimonials/ConnectPopup';
import ConsultationServices from '../components/ConsultationServices/ConsultationServices'
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
      <CardTestimonial
        heading="I help move your business forward with design. "
        shadeHeading=""
        spanHeading=""
        button="Learn more" />
      <ConnectPopup />
    </div>
  )
}

export default HomePage