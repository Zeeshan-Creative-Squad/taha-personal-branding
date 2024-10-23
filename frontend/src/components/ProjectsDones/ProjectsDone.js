import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CountUp from 'react-countup';
import './ProjectsDone.css';

const ProjectsDone = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartAnimation(true), 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container className="container container-custom">
      <Row className="justify-content-center">
        <Col md={4} sm={12} className="mb-4 customer-cont">
          <Card className="card-custom">
            <Card.Body>
              <Card.Title className="card-title-custom">
                {startAnimation && (
                  <CountUp end={140} duration={4.5} start={0} />
                )}
                +
              </Card.Title>
              <Card.Text className="card-text-custom para_main">
                Projects Done
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12} className="mb-4">
          <Card className="card-custom">
            <Card.Body>
              <Card.Title className="card-title-custom">
                {startAnimation && (
                  <CountUp end={5} duration={4.5} start={0} />
                )}
                +
              </Card.Title>
              <Card.Text className="card-text-custom para_main">
                Years of Experience
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12} className="mb-4">
          <Card className="card-custom">
            <Card.Body>
              <Card.Title className="card-title-custom">
                {startAnimation && (
                  <CountUp end={100} duration={4.5} start={0} />
                )}
                +
              </Card.Title>
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
