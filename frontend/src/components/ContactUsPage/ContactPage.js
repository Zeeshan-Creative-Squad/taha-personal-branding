import React from 'react';
import './ContactPage.css';
import { Form, Button, Row, Col } from 'react-bootstrap';


const ContactPage = () => {
    return (
        <>
        <div className="important-section">
            <div className='container contact-container'>
                <div className="contact-info">

                    <h1 className='head-h1'>GET IN TOUCH</h1>
                    <p className='para_main'>Lorem ipsum dolor sit amet in quis, consectetur eros adipiscing et elit. Suspendisse variu Lorem ipsum dolor si Lorem ipsum dolor sit amet in quis, consectetur eros adipiscing et elit. Suspendisse variu Lorem ipsum dolor si   </p>

                    <div className="contact-details gap-3">
    <img src="/images/icons/tel-icon.svg" alt="Phone" />
    <p className="body-paragraph">+1 (123) 456-7890</p>
   
  </div>
  <div className="contact-details gap-3">
    <img src="/images/icons/email-icon.svg" alt="Email" />
    <p className="body-paragraph">hello@etbhomestaging.com</p>
  </div>
                     <div className="contact-details gap-3">
    <img src="/images/icons/location-icon.svg" alt="Location" />
    <p className="body-paragraph">Milton, Ontario, Canada</p>
  </div>
  
                </div>
                <div className="contact-form">
                    
                    <Col lg={12}>
                        <Form>
                            <Row className='gy-3'>
                                <Col lg={12}>
                                    <Form.Group controlId="formName">
                                        <Form.Control type="text" placeholder="Your Full Name" />
                                    </Form.Group>
                                </Col>
                                <Col lg={12}>
                                    <Form.Group controlId="formPhoneNumber">
                                        <Form.Control type="email" placeholder="Your Email Address" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="formEmail" className='mt-4'>
                                <Form.Control type="text" placeholder="Phone Number" />
                            </Form.Group>
                            <Form.Group controlId="formMessage" className='mt-5'>
                                <Form.Control type="text" placeholder='Write Your Message Here..' rows={3} />
                            </Form.Group>
                            <Button variant="dark" type="submit" className="mt-5 connect-button w-100">
                                SUBMIT
                            </Button>
                        </Form>
                    </Col>
                </div>
            </div>
        </div>
        
        </>
    );
}

export default ContactPage;
