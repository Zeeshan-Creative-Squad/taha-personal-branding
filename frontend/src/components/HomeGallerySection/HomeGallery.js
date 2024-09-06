import React from 'react';
import './HomeGallery.css';
import { Link } from 'react-router-dom';
import Gallery from '../ProjectGallery/Gallery'


const HomeGallery = ({homeSection=false}) => {
  return (
    <div className='HomeGallery-container standard-padding-space'>
      <div className="blog-upper-content">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-end">
            <div className="col-md-6">
              <div className="blog-text-content">
                <p className="secondary-h1">Donations</p>
                <h3 className="head-h1 mb-0">This is the New Generation of Events</h3>   
                {/* {content && <p className="body-paragraph">{content}</p>} */}
                
              </div>
            </div>
            
            <div className="col-md-6 services-content-class">
          
              <p className="para_main">Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi tristique aliquam ultrices sit cras nascetur Convallis vivamus at Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi tristique aliquam ultrices</p>

              <Link to="/donations">
              <button className="connect-button mt-3">Donations</button>
              </Link>
            </div>
          </div>
          </div>
          <Gallery homeSection={homeSection} hideTransform={true} />
          </div>
          </div>
  )
}

export default HomeGallery