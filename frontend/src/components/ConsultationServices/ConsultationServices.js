import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ConsultationServices.css';

const ConsultationServices = () => {
  return (
    <Container className="container ">
      <div className='consultation-services'>
        <Row className='flex-row-reverse flex-md-row'>
          <Col md={4} className="text-md-left text-lg-left mb-4 text-center text-lg-start ">
            <div className="content-wrapper">
              <h1 className="head-h1">Consultation Services</h1>
              {/* <h2 className="font-weight-bold-custom">To Our Customers</h2> */}
              <p className='para_main'>Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries</p>
              <div className='mt-4'>
                <button className='connect-button'>Explore Now</button>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <Row>
              <Col md={6} className="">
                <Card className="card-custom">
                  <Card.Body>
                    <div className="icon-container">
                      <img src="/images/icons/cap-icon.svg" alt="Icon" className="icon-image" />
                    </div>
                    <Card.Title className="card-title-custom">Tech Graduates Consultation</Card.Title>
                    <Card.Text className="para_main">
                      Experience our premium grooming essentials, crafted to enhance your skills and delight your clients with every cut.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="">
                <Card className="card-custom">
                  <Card.Body>
                    <div className="icon-container">
                      <img src="/images/icons/saas-icon.svg" alt="Icon" className="icon-image" />
                    </div>
                    <Card.Title className="card-title-custom">SAAS Consultaion</Card.Title>
                    <Card.Text className="para_main">
                      Experience our premium grooming essentials, crafted to enhance your skills and delight your clients with every cut.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="w-100">
                <Card className="card-custom mt-3">
                  <Card.Body>
                    <div className="icon-container">
                      <img src="/images/icons/boost-icon.svg" alt="Icon" className="icon-image" />
                    </div>
                    <Card.Title className="card-title-custom">Startups Consultation</Card.Title>
                    <Card.Text className="para_main">
                      Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ConsultationServices;
