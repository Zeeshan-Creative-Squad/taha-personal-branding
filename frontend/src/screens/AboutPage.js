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
        image="/images/creatives/branding-boy-two.png"
        Heading="Your neve build website Best on webflow "
        button="Explore Now"
        background="#FFF" />
      <ServiceCard />
      <VisionAndMission flexdirection="row-reverse" Para="Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries finance software has love the financial haveing on centuries"
        image="/images/creatives/branding-boy.png"
        Heading="Your never build website"
        button="Get Consultation"
        background="#FFF"
        padding="10vh 0vh" />
      <ContactForm />
      <ConnectPopup />
    </div>
  )
}

export default AboutPage