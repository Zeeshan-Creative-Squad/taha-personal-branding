import React from 'react'
import NewsAndUpdatesHero from '../components/NewsAndUpdatesHero/NewsAndUpdatesHero'
import CardGrid from '../components/CardGrid/CardGrid'
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent';
import NewsLetter from '../components/NewsLetter/NewsLetter'
import CardTestimonial from '../components/OurServices/CardBoxServicesSection'


const Blogs = () => {
  return (
    <div>
        <CommonHeroComponent 
         Heading="OUR BLOGS"
         Para="Lorem ipsum dolor sit amet in quis, consectetur eros adipiscing et elit. Suspendisse variu"
         backgroundImg="/images/creatives/blogs-hero.jpg"/>
        
        <CardGrid />

        <CardTestimonial 
          heading="MOST POPULAR "
          shadeHeading="News"
          spanHeading=""
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing"
          button="Learn more"/>
    
        
        
    </div>
  )
}

export default Blogs