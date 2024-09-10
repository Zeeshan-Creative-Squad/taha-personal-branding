import React from 'react';
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent'
import VisionAndMission from '../components/VisionAndMission/VisionAndMission';
import ContactForm from '../components/ContactForm/ContactForm';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import ConnectPopup from '../components/OurTestimonials/ConnectPopup';

const AboutPage = () => {
  return (
    <div>
      <CommonHeroComponent title="" Heading="About" spanHead="Taha Sheikh" Para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim urna porttitor neque elementum cursus. Bibendum." />

      <VisionAndMission Para="Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries finance software has love the financial haveing on centuries"
        image="/images/creatives/about-banner-boy.png"
        Heading="Your neve build website Best on webflow "
        button="Explore Now"
        background="#F5F5F5" />

      <ServiceCard />

      <VisionAndMission flexdirection="row-reverse" Para="Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries finance software has love the financial haveing on centuries"
        image="/images/creatives/about-banner-boy.png"
        Heading="Your never build website"
        button="Get Consultation"
        background="#F5F5F5" />

      {/* <VisionAndMission flexdirection="row-reverse" Para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
        image="/images/creatives/about-section-three.png"
        shadeHeading="ETB BEN"
        afterShadeHeading="EFITS"
        background="#F5F5F5" /> */}


      {/* <BgTextContent /> */}

      {/* <ServicesCarousel heading="OUR" shadeHeading="PROFICIENCY" /> */}


      <ContactForm />
      <ConnectPopup />

    </div>
  )
}

export default AboutPage