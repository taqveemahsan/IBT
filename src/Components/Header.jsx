import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import heroimg from "../Assets/Imags/Bg/Hero.jpg";
import Herohand from "../Assets/Imags/Bg/Hero-hand.png";
import Users from "../Assets/Imags/Icons/users.png";
import { Coursetalkbtns } from "./Buttons";
import { StarList } from "./Lists";
export const Header = () => (
    <>
        <Container fluid className="landing-header">
            <div className="bg-layer" style={{ backgroundImage: `url(${Herohand}), url(${heroimg})` }} />
            <Container>
                <Row>
                    <Col xl="7" lg="7" md="12" className="textx">
                        <h1>START YOUR <span>CAREER IN TECH</span></h1>
                        <p>
                            IBT, in collaboration with AmMag Technologies, is your bridge to the tech world. We focus on equipping you with the essential skills, practical experience, and mindset to succeed in today’s rapidly changing industry. Whether you’re just starting or advancing your career, our programs are crafted to keep you aligned with the most relevant and in-demand tech fields, ensuring you’re always prepared for what comes next.
                        </p>
                        <div className="spacer-20" />
                        <Coursetalkbtns />
                        <div className="spacer-30" />
                        <ul className="rating-list">
                            <li>
                                <Image src={Users} alt="Users" />
                                <div>
                                    <h4 className="m-0">2,000+ </h4>
                                    <p className="text-white">Happy Learners</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h4 className="m-0 d-flex">4.9+ <p>(958+ Ratings)</p></h4>
                                    <StarList />
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>
);


export const InnerHeader = ({ heading, highlight, description, bgImages }) => (
    <Container fluid className="landing-header inner">
        <div className="bg-layer" style={{ backgroundImage: bgImages.map(img => `url(${img})`).join(", ") }} />
        <Container>
            <Row>
                <Col xl="7" lg="7" md="12" className="textx">
                    <h1>
                        {heading} <span>{highlight}</span>
                    </h1>
                    <p>{description}</p>
                    <div className="spacer-30" />
                    <ul className="rating-list">
                        <li>
                            <Image src={Users} alt="Users" />
                            <div>
                                <h4 className="m-0">2,000+ </h4>
                                <p className="text-white">Happy Learners</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h4 className="m-0 d-flex">4.9+ <p>(958+ Ratings)</p></h4>
                                <StarList />
                            </div>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </Container>
);