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

       
    
        
        
    </div>
  )
}

export default Blogs