import React from 'react';
import './DesignGrids.css'; // Include your custom CSS file

const DesignGrids = () => {
    return (
        <div className="container mt-5 Design-container">
            <div className='text-container'>
                <h1 className="head-h2">I help move your business forward with design.</h1>
                <p className="para_main text-center">Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries</p>
            </div>

            <div className="row all-cards">
                {/* Card 1 */}
                <div className="col-md-6 col-sm-12 mb-4">
                    <div className="card custom-card">
                        <div className='design-images'>
                            <img src="/images/creatives/design-grid.png" className="card-img-top img-fluid" alt="Laptop" />
                        </div>
                        <div className="card-body">
                            <div className="tags">
                                <span className="connect-button mr-2">Web Design</span>
                                <span className="connect-button">UI/UX Design</span>
                            </div>
                            <h5 className="head-h1">Saas page Design - Webflow Development</h5>
                            <p className="para_main">
                                Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial.
                            </p>
                            <a href="#" className="btn btn-outline-light">Learn More <span> <img src='/images/icons/button-icon.svg' alt='icon' className='button-icon img-fluid mx-2' /></span></a>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-6 col-sm-12 mb-4">
                    <div className="card custom-card">
                        <div className='design-images'>
                            <img src="/images/creatives/design-grid.png" className="card-img-top img-fluid" alt="Laptop" />
                        </div>
                        <div className="card-body">
                            <div className="tags">
                                <span className="connect-button mr-2">Web Design</span>
                                <span className="connect-button">UI/UX Design</span>
                            </div>
                            <h5 className="head-h1">Saas page Design - Webflow Development</h5>
                            <p className="para_main">
                                Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial.
                            </p>
                            <a href="#" className="btn btn-outline-light">Learn More <span> <img src='/images/icons/button-icon.svg' alt='icon' className='button-icon img-fluid mx-2' /></span></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 mb-4">
                    <div className="card custom-card">
                        <div className='design-images'>
                            <img src="/images/creatives/design-grid.png" className="card-img-top img-fluid" alt="Laptop" />
                        </div>
                        <div className="card-body">
                            <div className="tags">
                                <span className="connect-button mr-2">Web Design</span>
                                <span className="connect-button">UI/UX Design</span>
                            </div>
                            <h5 className="head-h1">Saas page Design - Webflow Development</h5>
                            <p className="para_main">
                                Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial.
                            </p>
                            <a href="#" className="btn btn-outline-light">Learn More <span> <img src='/images/icons/button-icon.svg' alt='icon' className='button-icon img-fluid mx-2' /></span></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 mb-4">
                    <div className="card custom-card">
                        <div className='design-images'>
                            <img src="/images/creatives/design-grid.png" className="card-img-top img-fluid" alt="Laptop" />
                        </div>

                        <div className="card-body">
                            <div className="tags">
                                <span className="connect-button mr-2">Web Design</span>
                                <span className="connect-button">UI/UX Design</span>
                            </div>
                            <h5 className="head-h1">Saas page Design - Webflow Development</h5>
                            <p className="para_main">
                                Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial.
                            </p>
                            <a href="#" className="btn btn-outline-light">Learn More <span> <img src='/images/icons/button-icon.svg' alt='icon' className='button-icon img-fluid mx-2' /></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignGrids;