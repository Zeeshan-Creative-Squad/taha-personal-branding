import React from 'react'
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent'
import TechMentorshipCards from '../components/TechMentorshipCards/TechMentorshipCards'
import VisionAndMission from '../components/VisionAndMission/VisionAndMission'
import QuestionAnswer from '../components/QuestionAnswer/QuestionAnswer'
import ConnectPopup from '../components/OurTestimonials/ConnectPopup'

const TechMentorshipPage = () => {
    return (
        <div>
            <CommonHeroComponent
                Heading="Tech Mentorship "
                spanHead=" & Career Guidance"
                Para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim urna porttitor neque elementum cursus. Bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim urna porttitor neque elementum cursus. Bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim urna porttitor neque elementum cursus. Bibendum."
            />

            <TechMentorshipCards />
            <VisionAndMission Para="Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries finance software has love the financial haveing on centuries"
                image="/images/creatives/about-banner-boy.png"
                heading="Tech Mentorship &  "
                spanHead="Career Guidance"
                button="Learn More"
                background="#131313" />

            <QuestionAnswer />
            <ConnectPopup />
        </div>
    )
}

export default TechMentorshipPage