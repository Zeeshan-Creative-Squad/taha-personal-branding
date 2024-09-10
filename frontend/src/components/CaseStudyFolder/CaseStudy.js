import React from 'react';
import './CaseStudy.css';


const CaseStudy = () => {
    return (
        <div className="container case-studies">
            <div className="row">
                {/* First Case Study */}
                <div className="col-md-6">
                    <div className="case-study translate-y-top">
                        <img src="/images/creatives/blogs-icon-one.png" alt="Project 1" className="img-fluid" />
                        <div className='card-titles'>
                            <h3 className="head-h1">Tech Graduates Consultation</h3>
                            <div className='card-inner'>
                                <a href="#" className="view-project">View Project </a>
                                <img src='/images/creatives/view-project-icon.svg' className='project-icon' />
                            </div>
                        </div>

                        <p className='para_main'>Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centurie</p>

                        <div className="tags mt-2">
                            <span className="badge">Web Design</span>
                            <span className="badge">Content & SEO</span>
                            <span className="badge">Branding</span>
                        </div>
                    </div>
                </div>
                {/* Second Case Study */}
                <div className="col-md-6">
                    <div className="case-study stay-static">
                        <img src="/images/creatives/blogs-icon-two.png" alt="Project 1" className="img-fluid" />

                        <div className='card-titles'>
                            <h3 className="head-h1">Tech Graduates Consultation</h3>
                            <div className='card-inner'>
                                <a href="#" className="view-project">View Project </a>
                                <img src='/images/creatives/view-project-icon.svg' className='project-icon' />
                            </div>

                        </div>
                        <p className='para_main'>Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centurie</p>

                        <div className="tags mt-2">
                            <span className="badge">Web Design</span>
                            <span className="badge">Content & SEO</span>
                            <span className="badge">Branding</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="case-study translate-y-top-second">
                        <img src="/images/creatives/blogs-icon-one.png" alt="Project 1" className="img-fluid" />
                        <div className='card-titles'>
                            <h3 className="head-h1">Tech Graduates Consultation</h3>
                            <div className='card-inner'>
                                <a href="#" className="view-project">View Project </a>
                                <img src='/images/creatives/view-project-icon.svg' className='project-icon' />
                            </div>
                        </div>

                        <p className='para_main'>Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centurie</p>

                        <div className="tags mt-2">
                            <span className="badge">Web Design</span>
                            <span className="badge">Content & SEO</span>
                            <span className="badge">Branding</span>
                        </div>
                    </div>
                </div>
                {/* Second Case Study */}
                <div className="col-md-6">
                    <div className="case-study stay-static mt-5">
                        <img src="/images/creatives/blogs-icon-two.png" alt="Project 1" className="img-fluid" />

                        <div className='card-titles'>
                            <h3 className="head-h1">Tech Graduates Consultation</h3>
                            <div className='card-inner'>
                                <a href="#" className="view-project">View Project </a>
                                <img src='/images/creatives/view-project-icon.svg' className='project-icon' />
                            </div>

                        </div>
                        <p className='para_main'>Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centurie</p>

                        <div className="tags mt-2">
                            <span className="badge">Web Design</span>
                            <span className="badge">Content & SEO</span>
                            <span className="badge">Branding</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudy