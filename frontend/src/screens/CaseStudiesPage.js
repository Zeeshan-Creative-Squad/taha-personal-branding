import React from 'react'
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent';
import CaseStudy from '../components/CaseStudyFolder/CaseStudy';
import HomeGallery from '../components/HomeGallerySection/HomeGallery';

const CaseStudiesPage = () => {
  return (
    <div>
      <CommonHeroComponent
        Heading="Case"
        spanHead="Studies"
        Para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim urna porttitor neque elementum cursus. Bibendum."
      />

      <CaseStudy />
      <HomeGallery />
    </div>
  )
}

export default CaseStudiesPage;