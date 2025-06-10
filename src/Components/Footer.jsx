import React from "react";
import { Col, Container, Dropdown, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footerlogo from '../Assets/Imags/Logo/logo.svg';
function Footer() {
  return (
    <>
      <Container fluid className="footer scroll-anime top">
        <Container>
          <Row>
            <Col xl="12">
              <Link to="/"><Image src={Footerlogo} alt="Logo" /></Link>
              <ul>
                <li><Link to="Aboutus">About Us</Link></li>
                <li>
                  <Dropdown className="simple-dropdown">
                    <Dropdown.Toggle id="dropdown-basic">
                      On-Demand Courses <i className="fa fa-angle-down"/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/AiCourses">Ai Courses</Dropdown.Item>
                      <Dropdown.Item href="/PythonCourses">Python Courses</Dropdown.Item>
                      <Dropdown.Item href="/BlockchainCourses">Blockchain Courses</Dropdown.Item>
                      <Dropdown.Item href="/MiningWorkshop">Blockchain Mining Workshop</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li><Link to="Aboutus">Internships</Link></li>
              </ul>
              <p>© 2024 IBT Learning Solutions LLC</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default Footer;