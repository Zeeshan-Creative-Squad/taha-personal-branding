import React from 'react'
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent'
import TechMentorshipCards from '../components/TechMentorshipCards/TechMentorshipCards'
import VisionAndMission from '../components/VisionAndMission/VisionAndMission'
import QuestionAnswer from '../components/QuestionAnswer/QuestionAnswer'
import ConnectPopup from '../components/OurTestimonials/ConnectPopup'
import TextContent from '../components/TextContent/TextContent'
import SectionComponent from '../components/SectionComponent/SectionComponent'
import BookConsultation from '../components/BookConsultation/BookConsultation'
import PaymentForm from '../components/PaymentForm/PaymentForm'

const TechMentorshipPage = () => {
    return (
        <div>
            <CommonHeroComponent
                Heading="Tech Mentorship "
                spanHead=" & Career Guidance"
                Para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim urna porttitor neque elementum cursus. Bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim urna porttitor neque elementum cursus. Bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim urna porttitor neque elementum cursus. Bibendum."
                padding="2vh 0vh"
            />

            <BookConsultation />
            <PaymentForm />

            <TechMentorshipCards />
            {/* <TextContent
                img="/images/creatives/home-text-2.png"
                subHeading=""
                heading="At your fingertips : "
                headingAfterBr="   "
                spanHead="  a dedicated career coach"
                headingAfterBrmore=""
                paragraph="Lorem ipsum dolor sit amet in quis, consectetur eros adipiscing et elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,"
                btn={false}
                btnText=""
                shiftRow={true}
                listData={["Professional Sports", "Automotive", "Construction", "Technology", "Healthcare", "E-Commerce", "Hospitality", "Finance", "Real Estate", "Retail", "Education", "Legal"]}
            /> */}

            <SectionComponent
                flexdirection="row-reverse"
                heading="At your "
                spanHead="fingertips"
                Para="Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries" homeTitle=""
                button="Get Consultation"
                image="/images/creatives/boy-about-image.png" />
            <SectionComponent

                heading="At your "
                spanHead="fingertips"
                Para="Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries" homeTitle=""
                button="Get Consultation"
                image="/images/creatives/boy-about-image.png" />

            {/* <VisionAndMission Para="Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries finance software has love the financial haveing on centuries"
                image="/images/creatives/about-banner-boy.png"
                heading="Tech Mentorship &  "
                spanHead="Career Guidance"
                button="Learn More"
                background="#131313" /> */}

            {/* <QuestionAnswer /> */}
            <ConnectPopup />
        </div>
    )
}

export default TechMentorshipPage