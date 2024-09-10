import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-wrapper">
            <div className='container'>
                <div className="contact-header">
                    <h1 className='head-h1'>Get in<span className='spanHead'> Touch</span></h1>
                    <p className='para_main'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim urna porttitor neque elementum cursus. Bibendum.</p>
                </div>

                <div className="contact-body">
                    <div className="contact-form">
                        <h1 className='head-h3'>Send a message</h1>
                        <form>
                            <div className="form-group">
                                <input type="text" placeholder="Your First Name" />
                                <input type="text" placeholder="Your Last Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Enter Your Email" />
                                <input type="text" placeholder="Subject" />
                            </div>
                            <textarea placeholder="Type Your Message" rows="4"></textarea>

                            <div className="form-actions-contact">
                                <div className="newsletter-checkbox">
                                    {/* <input type="checkbox" id="newsletter" /> */}
                                    <p className='para_main'>Subscribe to our Newsletter</p>
                                </div>
                                <div className='mt-3'>

                                <button type="submit" className="connect-button">Submit Now</button>
                                </div>
                            </div>

                        </form>
                    </div>

                    <div className="contact-details">
                        <div className="contact-item d-flex">
                            <img src='/images/icons/phone-icon.svg' className='img-fluid' />
                            <p className='para_main'>Email Address</p>
                            <p className='para_main'>hello@tahasheikh.com</p>
                        </div>
                        <div className="contact-item d-flex">
                            <img src='/images/icons/phone-icon.svg' className='img-fluid' />
                            <p className='para_main'>Contact Us</p>
                            <p className='para_main'>+92 300 1234567</p>
                        </div>
                        <div className="contact-item d-flex">
                            <img src='/images/icons/phone-icon.svg' className='img-fluid' />
                            <p className='para_main'>Location</p>
                            <p className='para_main'>Karachi, Pakistan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
