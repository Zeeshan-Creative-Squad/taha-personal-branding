import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className='semi-contact-form'>
      <div className="container">
        <div className='contact-form'>
          <h2 className="head-h1 mb-4">Let's Connect</h2>
          <form className='semi-contact-section'>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label text-white" htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" className="form-control" placeholder="Enter your full name" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label text-white" htmlFor="email">Email Address</label>
                <input type="email" id="email" className="form-control" placeholder="Enter your email" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label text-white" htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" className="form-control" placeholder="Enter your phone number" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label text-white" htmlFor="subject">Subject</label>
                <input type="text" id="subject" className="form-control" placeholder="Enter the subject" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label text-white" htmlFor="message">Write your message here</label>
              <textarea id="message" className="form-control" rows="4" placeholder="Type your message"></textarea>
            </div>
            <button type="submit" className="connect-button w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
