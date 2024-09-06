import React from 'react';
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent';
import Gallery from '../components/ProjectGallery/Gallery';
import NewsLetter from '../components/NewsLetter/NewsLetter';

const GalleryPage = () => {
  return (
    <div>
        <CommonHeroComponent  Heading="PAST PROJECTS GALLERY" Para="Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi tristique aliquam ultrices sit cras nascetur in elementum placerat sed viverra risus in turpis vitae sed est tincidunt vitae." backgroundImg="/images/creatives/gallery-banner.jpg"/>
        <Gallery />
        <NewsLetter background="transparent linear-gradient(38deg, #FFFFFF00 0%, #FFFFFE00 60%, #A5CD375C 100%, #bbff00 100%) 0% 0% no-repeat" />

    </div>
  )
}

export default GalleryPage;