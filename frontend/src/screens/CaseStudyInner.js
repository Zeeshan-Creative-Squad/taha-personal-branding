import React from 'react';
import ProjectHero from '../components/ProjectHero/ProjectHero';
import CaseStudyInnerSection from '../components/CaseStudyInner/CaseStudyInnerSection';
import ConnectPopup from '../components/OurTestimonials/ConnectPopup';

const CaseStudyInner = () => {
    return (
        <div>
            <ProjectHero
                title="Tech Graduates"
                highlight="Consultation"
                description="Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance"
                tags={['Web Design', 'Content & SEO', 'Branding']}
                client="Text Sign"
                date="September 16, 2023"
                category="1 to 1 Consultation"
                website="www.textsign.com"
            />
            <CaseStudyInnerSection />
            <ConnectPopup />
        </div>
    )
}

export default CaseStudyInner;