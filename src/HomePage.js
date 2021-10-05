import { Container, Row, Col, Button, Form } from 'react-bootstrap'

export default function HomePage() {
  return (
    <Container>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <h1>Bicos</h1>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
        </Col>
        <Col md={4}>
          <Form>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Form>
        </Col>
        </Row>
    </Container>
  )
}
