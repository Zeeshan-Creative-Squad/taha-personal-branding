import React from 'react'
import NewsAndUpdatesHero from '../components/NewsAndUpdatesHero/NewsAndUpdatesHero'
import VisionAndMission from '../components/VisionAndMission/VisionAndMission'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import HappyCustomer from '../components/HappyCustomers/HappyCustomer'
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent'
import CardTestimonial from '../components/OurServices/CardBoxServicesSection'
import Homehero from '../components/HomeHero/HomeHero'
import HomeGallery from '../components/HomeGallerySection/HomeGallery'
import Testimonials from '../components/Testimonials/Testimonials'
import WhatWe from '../components/WhatWeDo/whatWe'
import OurProcess from '../components/OurProcess/OurProcess';
import ContactForm from '../components/ContactForm/ContactForm';


const HomePage = () => {
  return (
    <div>
         <Homehero />
        <VisionAndMission 
        flexdirection="row-reverse" 
        shadeHeading="ABOUT"
        afterShadeHeading=" US"
        Para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing" homeTitle="" 
        button="ABOUT US" 
        image="/images/creatives/about-banner.png"
        
        />

        <WhatWe  Heading="WHAT " heading="HOME STAGING" Para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Pellentesque habitant morbi tristique senectus et netus et malesuada fames something turpis egestas making better molestie. Nunc egestas erat lacus, vitae eleifend nisi eleifend making something realy good" homeTitle="" button="READ MORE" image="/images/creatives/slider-home--staging.png"
        shadeHeading="WE DO"
        background="transparent linear-gradient(313deg, #FFFFFF00 0%, #FFFFFE00 60%, #A5CD375C 100%, #bbff00 100%) 0% 0% no-repeat"/>

<OurProcess heading="WHY " shadeHeading="CHOOSE US"/>

        <CardTestimonial 
          heading="LATEST "
          shadeHeading="NEWS AND UPDATES"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing"
          button="Learn more"/>
        {/* <HappyCustomer /> */}

       

        <Testimonials heading="WHAT OUR " shadeHeading="CLIENT SAYS"/>

        {/* <HomeGallery homeSection={true}/> */}
        
        <NewsLetter />
        <ContactForm />
       
    </div>
  )
}

export default HomePage