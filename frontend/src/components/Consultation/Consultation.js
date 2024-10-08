import React from 'react'
import CommonHeroComponent from '../CommonHeroComponent/CommonHeroComponent';
import VisionAndMission from '../VisionAndMission/VisionAndMission';
import ContactForm from '../ContactForm/ContactForm';

const Consultation = () => {
    return (
        <div>
            <CommonHeroComponent
                title="" spanHead="Consultation" Para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim urna porttitor neque elementum cursus. Bibendum." />

            <VisionAndMission Para="Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries finance software has love the financial haveing on centuries"
                image="/images/creatives/about-banner-boy.png"
                heading="Tech Mentorship &  "
                spanHead="Career Guidance"
                button="Learn More"
                background="#131313" />

            <VisionAndMission flexdirection="row-reverse" Para="Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries finance software has love the financial haveing on centuries"
                image="/images/creatives/about-banner-boy.png"
                Heading="Project Consultation & Development"
                button="Learn More"
                background="#FFF" />

            <ContactForm />
        </div>
    )
}

export default Consultation;