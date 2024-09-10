import React from 'react';
import "./OurProcess.css";

const processData = [
    { img: "/images/creatives/choose-us-one.png", title: "CREATIVE", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { img: "/images/creatives/choose-us-two.png", title: "KNOW - HOW ", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.." },
    { img: "/images/creatives/choose-us-three.png", title: "DEVOTED", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { img: "/images/creatives/choose-us-four.png", title: "CARING", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { img: "/images/creatives/choose-us-four.png", title: "CARING", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    // {img:"/images/creatives/process6.png",title:"COORDINATION WITH IRCC",content:"After submission, we will act as an authorized consultant between you and IRCC to coordinate any further document submissions or clarifications that may be needed by IRCC."},
    // {img:"/images/creatives/process7.png",title:"WELCOME TO CANADA",content:"If the process goes as expected and the results are in your favour, get ready to start a new life in Canada!"},
];

function OurProcess(props) {
    return (
        <div className='process-container standard-padding-space'>
            <div className='container'>
                <div className='text-container text-center'>
                    <h3 className='head-h2'> {props.heading}
                        <span className='head-bg'>{props.shadeHeading}</span>
                    </h3>
                    <p className='para_main'>We pride ourselves on having a transparent process. We make sure that the process is smooth and straightforward for you.</p>
                </div>
                <div className='process-list'>
                    <div className='row gy-3 justify-content-center'>
                        {processData.map((ele, index) => (
                            <div key={index} className='col-lg-4 col-md-4 py-3'>
                                <div className='border-box justify-content-center'>
                                    <h3 className='head-h3'>{ele.title}</h3>
                                    <p className='para_main mt-3'>{ele.content}</p>
                                    <img className='banner-img' src={ele.img} alt={ele.title} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurProcess;
