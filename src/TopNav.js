import { Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function TopNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/professionals" className="nav-link">Professionals</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
