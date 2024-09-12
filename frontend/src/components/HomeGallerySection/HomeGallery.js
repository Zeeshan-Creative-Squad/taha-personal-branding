import React from 'react';
import './HomeGallery.css';
import { Link } from 'react-router-dom';
import Gallery from '../ProjectGallery/Gallery'


const HomeGallery = ({ homeSection = false }) => {
  return (
    <div className='HomeGallery-container standard-padding-space'>
      <div className="blog-upper-content">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-md-6">
              <div className="blog-text-content">
                <h1 className="head-h1">About <span className='spanHead'>Us</span></h1>
                {/* {content && <p className="body-paragraph">{content}</p>} */}

              </div>
            </div>

            <div className="col-md-6 services-content-class">

              <p className="para_main">Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survivedn centuries</p>

              <Link to="/donations">
                <button className="connect-button mt-3">About Me</button>
              </Link>
            </div>
          </div>
        </div>
        {/* <Gallery homeSection={homeSection} hideTransform={true} /> */}
      </div>
    </div>
  )
}

export default HomeGallery