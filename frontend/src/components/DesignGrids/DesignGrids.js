import React from 'react';
import './DesignGrids.css'; // Include your custom CSS file

const DesignGrids = () => {
    return (
        <div className="container mt-5 Design-container">
            <div className='text-container'>
            <h2 className="head-h2">Most Popular Blogs & News</h2>
            <p className="para_main text-center">Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took</p>
            </div>
            
            <div className="row">
                {/* Card 1 */}
                <div className="col-md-6">
                    <div className="card custom-card">
                        <img src="laptop-image.png" className="card-img-top img-fluid" alt="Laptop" />
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
                <div className="col-md-6">
                    <div className="card custom-card">
                        <img src="laptop-image.png" className="card-img-top img-fluid" alt="Laptop" />
                        <div className="card-body">
                            <div className="tags">
                                <span className="connect-button mr-2">Web Design</span>
                                <span className="connect-button">UI/UX Design</span>
                            </div>
                            <h5 className="head-h1">Saas page Design - Webflow Developmet</h5>
                            <p className="para_main">
                                Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial.
                            </p>
                            <a href="#" className="btn btn-outline-light align-items-center">Learn More <span> <img src='/images/icons/button-icon.svg' alt='icon' className='button-icon img-fluid mx-2' /></span></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card custom-card">
                        <img src="laptop-image.png" className="card-img-top img-fluid" alt="Laptop" />
                        <div className="card-body">
                            <div className="tags">
                                <span className="connect-button mr-2">Web Design</span>
                                <span className="connect-button">UI/UX Design</span>
                            </div>
                            <h5 className="head-h1">Saas page Design - Webflow Developmet</h5>
                            <p className="para_main">
                                Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial.
                            </p>
                            <a href="#" className="btn btn-outline-light align-items-center">Learn More <span> <img src='/images/icons/button-icon.svg' alt='icon' className='button-icon img-fluid mx-2' /></span></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card custom-card">
                        <img src="laptop-image.png" className="card-img-top img-fluid" alt="Laptop" />
                        <div className="card-body">
                            <div className="tags">
                                <span className="connect-button mr-2">Web Design</span>
                                <span className="connect-button">UI/UX Design</span>
                            </div>
                            <h5 className="head-h1">Saas page Design - Webflow Developmet</h5>
                            <p className="para_main">
                                Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial.
                            </p>
                            <a href="#" className="btn btn-outline-light align-items-center">Learn More <span> <img src='/images/icons/button-icon.svg' alt='icon' className='button-icon img-fluid mx-2' /></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignGrids;
