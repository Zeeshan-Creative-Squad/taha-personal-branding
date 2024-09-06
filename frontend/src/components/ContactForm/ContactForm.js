import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-form-container ">
      <div className='container'>
        <div className='row align-items-lg-end'>

          <div className="col-lg-6 contact-inf d-lg-block d-none">
            <h1 className="head-h2">LET'S CONNECT</h1>
            <p className="contact-detail">
              <strong>ADDRESS</strong><br />
              991 White St . Dawsonville GA 30534 , New York
            </p>
            <p className="contact-detail">
              <strong>PHONE NUMBER</strong><br />
              + 1 (123) 456-7890
            </p>
            <p className="contact-detail">
              <strong>EMAIL</strong><br />
              gmail@etbhomestaging.com
            </p>
          </div>
          
          <div className="col-lg-6 contact-for d-flex flex-md-row flex-column">

          <div className="col-lg-6 d-lg-none contact-inf">
            <h1 className="head-h2">LET'S CONNECT</h1>
            <p className="contact-detail">
              <strong>ADDRESS</strong><br />
              991 White St . Dawsonville GA 30534 , New York
            </p>
            <p className="contact-detail">
              <strong>PHONE NUMBER</strong><br />
              + 1 (123) 456-7890
            </p>
            <p className="contact-detail">
              <strong>EMAIL</strong><br />
              gmail@etbhomestaging.com
            </p>
          </div>
  <div className="input-column">
    <input type="text" placeholder="Name" className="form-input" />
    <input type="email" placeholder="Email" className="form-input" />
    <input type="tel" placeholder="Phone" className="form-input" />
  </div>
  <div className="textarea-portion">
    <textarea type="textarea" placeholder="Message*" className="form-textarea"></textarea>
  </div>
 
</div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
