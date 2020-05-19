import React from 'react'
import { Container, Row, Col } from 'reactstrap'

// Components
import { Stepper } from '../../components/Stepper'

export const HomePage = () => (
  <Container>
    <Row>
      <Col>
        <Stepper />
      </Col>
    </Row>
  </Container>
)
