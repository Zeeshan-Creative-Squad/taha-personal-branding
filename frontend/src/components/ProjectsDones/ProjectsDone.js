import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ProjectsDone.css'; // Import the external CSS file

const ProjectsDone = () => {
  return (
    <Container className="container container-custom">
      <Row className="justify-content-center">
        <Col md={4} sm={12} className="mb-4 customer-cont">
          <Card className="card-custom">
            <Card.Body>
              <Card.Title className="card-title-custom">140+</Card.Title>
              <Card.Text className="card-text-custom para_main">
                Projects Done
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12} className="mb-4">
          <Card className="card-custom">
            <Card.Body>
              <Card.Title className="card-title-custom">5+</Card.Title>
              <Card.Text className="card-text-custom para_main">
                Years of Experience
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12} className="mb-4">
          <Card className="card-custom">
            <Card.Body>
              <Card.Title className="card-title-custom">100+</Card.Title>
              <Card.Text className="card-text-custom para_main">
                Successful Consultations
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsDone;
