import React from 'react';
import './ProjectHero.css';

const ProjectHero = (props) => {
    return (
        <div className="project-hero">
            <div className="container">
                <div className="row">
                    {/* Left Column */}
                    <div className="col-md-8 project-details">
                        <h1 className="project-title">
                            {props.title} <span className="highlight">{props.highlight}</span>
                        </h1>
                        <p className="para_main">{props.description}</p>
                        <div className="tags mt-3">
                            {props.tags.map((tag, index) => (
                                <span key={index} className="connect-button">{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-4 project-info">
                        <ul className="list-unstyled">
                            <div className="row">
                                <div className="col-md-6">
                                    <li className='flex-column d-flex Li-text'>
                                        <p className='semi-text'>Client: </p> {props.client}
                                    </li>
                                </div>
                                <div className="col-md-6">
                                    <li className='flex-column d-flex Li-text'>
                                        <p className='semi-text'>Date: </p> {props.date}
                                    </li>
                                </div>
                                <div className="col-md-6">
                                    <li className='flex-column d-flex Li-text'>
                                        <p className='semi-text'>Category: </p> {props.category}
                                    </li>
                                </div>
                                <div className="col-md-6">
                                    <li className='flex-column d-flex Li-text'>
                                        <p className='semi-text'>Website: </p> <a href={props.website} style={{ textDecoration: "none" }}>{props.website}</a>
                                    </li>
                                </div>
                            </div>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ProjectHero;
