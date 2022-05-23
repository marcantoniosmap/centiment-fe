import { Button } from "bootstrap";
import { Offcanvas } from "bootstrap";
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function NavbarCustom(){

    return(
      <>
      <Navbar className="mainNavbar" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link href="#home">About Us</Nav.Link>
              <Nav.Link href="#link">Alerts</Nav.Link>
              <Nav.Link href="#link">Alerts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    )
}