import React from 'react';
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent'
import VisionAndMission from '../components/VisionAndMission/VisionAndMission';
import ContactForm from '../components/ContactForm/ContactForm';

const Services = () => {
  return (
    <div>
      <CommonHeroComponent
        Heading="HOME STAGING"
        Para="Lorem ipsum dolor sit amet in quis, consectetur eros adipiscing et elit. Suspendisse variu"
        backgroundImg="/images/creatives/services-hero.jpg" />

      <VisionAndMission flexdirection="row-reverse" heading="HOME DECOR" Para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
        image="/images/creatives/services-section-two.png"
        background="#FFF" 
        bgText="01"
        />

      <VisionAndMission heading="HOME DECOR" Para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
        image="/images/creatives/services-section-one.png"
        background="#F5F5F5"
           bgText="02"
        />



      <VisionAndMission flexdirection="row-reverse" heading="HOME DECOR" Para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
      background="#FFF"
        image="/images/creatives/services-section-three.png"
         bgText="03"
        />



      <ContactForm />



    </div>
  )
}

export default Services;