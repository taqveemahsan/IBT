import React from "react";
import { Button, Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '../Assets/Imags/Logo/logo.svg';
function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className="logo" href="/"><Image src={Logo} alt="Logo" /></Navbar.Brand>
          <div>
            <Link className="reg-btn trans show-on-tablet radius" to="/Courses">Go To Courses</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#features">About Us</Nav.Link>
              <NavDropdown title="On-Demand Courses" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/AiCourses">Ai Courses</NavDropdown.Item>
                <NavDropdown.Item href="/PythonCourses">Python Courses</NavDropdown.Item>
                <NavDropdown.Item href="/MernStack">MERN Stack Course</NavDropdown.Item>
                <NavDropdown.Item href="/BlockchainCourses">Blockchain Courses</NavDropdown.Item>
                <NavDropdown.Item href="/MiningWorkshop">Blockchain Mining Workshop</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing">Internships</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Link className="reg-btn trans radius hide-on-tablet" to="/Courses">Go To Courses</Link>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;