import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-wrapper">
            <div className='container'>
                <div className="contact-header">
                    <h1 className='head-h1'>Get in<span className='spanHead'> Touch</span></h1>
                    <p className='para_main py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim urna porttitor neque elementum cursus. Bibendum.</p>
                </div>

                <div className="contact-body">
                    <div className="contact-form">
                        <h1 className='head-h3'>Send a message</h1>
                        <form className='main-group'>
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
                        <div className="contact-item">
                            <div className='d-flex gap-3 contact-side-boxes align-items-center'>
                                <img src='/images/icons/email-icon-contact.svg' className='img-fluid' />
                                <p className='para_main'>Email Address</p>
                            </div>

                            <p className='contact-number'>hello@tahasheikh.com</p>
                        </div>
                        <div className="contact-item">
                            <div className='d-flex gap-3 contact-side-boxes'>
                                <img src='/images/icons/phone-icon-contact.svg' className='img-fluid' />
                                <p className='para_main'>Contact Us</p>
                            </div>
                            <p className='contact-number'>+92 300 1234567</p>
                        </div>
                        <div className="contact-item">
                            <div className='d-flex gap-3 contact-side-boxes'>
                                <img src='/images/icons/location-icon-contact.svg' className='img-fluid' />
                                <p className='para_main'>Location</p>
                            </div>
                            <p className='contact-number'>Karachi, Pakistan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
