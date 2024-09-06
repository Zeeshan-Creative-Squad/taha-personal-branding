import React from 'react';
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent'
import VisionAndMission from '../components/VisionAndMission/VisionAndMission';
import TeamMembers from '../components/TeamMembers/teamMembers';
import CardBoxAboutSection from '../components/CardsForAboutSection/CardBoxAboutSection'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import BgTextContent from '../components/BgTextContent/BgTextContent';
import ServicesCarousel from '../components/ServicesCarousel/ServicesCarousel';
import ContactForm from '../components/ContactForm/ContactForm';


const AboutPage = () => {
  return (
    <div>
      <CommonHeroComponent title="" Heading="ABOUT ETB HOME STAGING" Para="Lorem ipsum dolor sit amet in quis, consectetur eros adipiscing et elit. Suspendisse variu" backgroundImg="/images/creatives/about-home.jpg" />

      <VisionAndMission flexdirection="row-reverse" Para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
        image="/images/creatives/about-section-one.png"
        afterShadeHeading="RE"
        shadeHeading="WHO WE A"
        background="#F5F5F5" />

      <VisionAndMission Para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
        image="/images/creatives/about-section-two.png"
        shadeHeading="WHY "
        afterShadeHeading="ETB"
        background="#FFF" />





      <VisionAndMission flexdirection="row-reverse" Para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
        image="/images/creatives/about-section-three.png"
        shadeHeading="ETB BEN"
        afterShadeHeading="EFITS"
        background="#F5F5F5" />


      <BgTextContent />

      <ServicesCarousel heading="OUR" shadeHeading="PROFICIENCY" />

      <ContactForm />

    </div>
  )
}

export default AboutPage