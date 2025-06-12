import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { InnerHeader } from '../Components/Header';
import heroimg from "../Assets/Imags/Bg/bg.jpg";
import TalentMarket from "../Assets/Imags/Courses/TalentMarket.png";
import IBTBusiness from "../Assets/Imags/Courses/IBTBusiness.png";
import { Learnmorecontacebtns } from '../Components/Buttons';

function AboutUs() {
    const [animatedElements, setAnimatedElements] = useState([]);

    // Function to check if an element is in the viewport
    function isElementInViewport(elem) {
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const elemTop = elem.getBoundingClientRect().top + scroll;

        return elemTop - scroll < windowHeight;
    }

    // Function to add the "anime" class to sections in the viewport
    function animateSections() {
        const elementsToAnimate = document.querySelectorAll('.scroll-anime');
        const elementsInViewport = [];

        elementsToAnimate.forEach((elem) => {
            if (isElementInViewport(elem)) {
                elem.classList.add('anime');
                elementsInViewport.push(elem);
            }
        });

        setAnimatedElements(elementsInViewport);
    }

    useEffect(() => {
        // Initial check on page load
        animateSections();

        // Add scroll event listener
        window.addEventListener('scroll', animateSections);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('scroll', animateSections);
        };
    }, []);

    return (
        <>
            <InnerHeader
                heading="ABOUT"
                highlight="US"
                description="Discover our mission to bridge the gap between education and industry, empowering individuals with the skills and knowledge needed to excel in the ever-evolving tech landscape."
                bgImages={[heroimg]}
            />

            <Container fluid className='about-us-page'>
                <Container>
                    <Row>
                        <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={{ span: 12, offset: 0 }} className='text-center scroll-anime top'>
                            <div className='spacer-50' />
                            <h2>Welcome to <span>IBT and AmMag Technologies</span></h2>
                            <div className='spacer-30' />
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} className='scroll-anime bottom'>
                            <div className='about-content-section'>
                                <p className='about-intro'>
                                    Welcome to IBT and AmMag Technologies, where we redefine the future of learning and technology. We are a forward-thinking institution committed to empowering individuals with the skills, knowledge, and practical experience they need to excel in the ever-evolving tech landscape.
                                </p>
                                
                                <p className='about-mission'>
                                    Our mission is to bridge the gap between education and industry, offering innovative programs tailored to meet the demands of today's most in-demand tech fields. Whether you're just starting your career or looking to advance, we equip you with the tools to thrive in a fast-paced world.
                                </p>
                            </div>
                            <div className='spacer-40' />
                        </Col>
                    </Row>

                    <Row>
                        <Col xl="12" lg="12" md="12" className='scroll-anime bottom'>
                            <div className='partnership-section'>
                                <h3><span className='box-span' /> Our <span>Partnership with AppsGenii</span></h3>
                                <div className='spacer-20' />
                                <p className='partnership-text'>
                                    In partnership with <strong>AppsGenii</strong>, a leading software development company, we take pride in offering hands-on experiences that go beyond traditional classroom learning. AppsGenii's expertise in cutting-edge mobile and web applications serves as the backbone of our programs, ensuring that our students not only learn but also engage with real-world projects.
                                </p>
                                <p className='partnership-text'>
                                    Together, IBT and AppsGenii are dedicated to shaping the tech leaders of tomorrow, creating a pathway for success in the digital age.
                                </p>
                            </div>
                            <div className='spacer-50' />
                        </Col>
                    </Row>

                    <Row>
                        <Col xl="12" lg="12" md="12" className='text-center scroll-anime top'>
                            <h2>Our <span>Values & Vision</span></h2>
                            <div className='spacer-40' />
                        </Col>
                    </Row>

                    <Row>
                        <Col xl="12" lg="12" md="12">
                            <div className='values-grid scroll-anime bottom'>
                                <div className='value-card'>
                                    <div className='value-icon'>
                                        <span>🎯</span>
                                    </div>
                                    <h4>Innovation-Driven</h4>
                                    <p>We stay ahead of industry trends, ensuring our curriculum reflects the latest technologies and methodologies that employers demand.</p>
                                </div>

                                <div className='value-card'>
                                    <div className='value-icon'>
                                        <span>🤝</span>
                                    </div>
                                    <h4>Industry Partnership</h4>
                                    <p>Our collaboration with leading tech companies provides students with real-world experience and direct pathways to employment.</p>
                                </div>

                                <div className='value-card'>
                                    <div className='value-icon'>
                                        <span>🌟</span>
                                    </div>
                                    <h4>Student Success</h4>
                                    <p>We measure our success by the achievements of our graduates, supporting them from enrollment through career placement.</p>
                                </div>

                                <div className='value-card'>
                                    <div className='value-icon'>
                                        <span>🚀</span>
                                    </div>
                                    <h4>Future-Ready</h4>
                                    <p>Our programs are designed to prepare students for the jobs of tomorrow, not just today's market demands.</p>
                                </div>
                            </div>
                            <div className='spacer-50' />
                        </Col>
                    </Row>

                    <Row>
                        <Col xl="12" lg="12" md="12" className='text-center scroll-anime top'>
                            <h2>Our <span>Impact</span></h2>
                            <h4>Making a difference in the global tech ecosystem</h4>
                            <div className='spacer-40' />
                        </Col>
                    </Row>

                    <Row>
                        <Col xl="12" lg="12" md="12">
                            <div className='impact-section'>
                                <div className='post-box'>
                                    <div className='post-two scale-post scroll-anime left'>
                                        <Image src={TalentMarket} alt="Global Tech Talent Market" />
                                        <h3>Global Tech Talent Development</h3>
                                        <p>
                                            IBT is bridging the global tech skills gap by turning ambition into ability—anywhere in the world. We empower learners from underserved regions, career switchers, and remote-first professionals to master in-demand technologies and enter the global talent pool. IBT is fueling a new wave of agile, cross-border tech talent ready to lead the future.
                                        </p>
                                        {/* <Learnmorecontacebtns /> */}
                                    </div>
                                    <div className='post-two scale-post scroll-anime right'>
                                        <Image src={IBTBusiness} alt="IBT for Business" />
                                        <h3>Enterprise Solutions</h3>
                                        <p>
                                            IBT delivers job-ready tech talent that drives real business outcomes. Our graduates bring hands-on experience, reduce onboarding time, and contribute from Day 1. From startups to scale-ups, companies gain access to skilled professionals in AI, blockchain, and Python—trained through real-world challenges, not just theory.
                                        </p>
                                        {/* <Learnmorecontacebtns /> */}
                                    </div>
                                </div>
                            </div>
                            <div className='spacer-50' />
                        </Col>
                    </Row>

                    <Row>
                        <Col xl="12" lg="12" md="12" className='text-center scroll-anime bottom'>
                            <div className='stats-section'>
                                <h2>Our <span>Achievements</span></h2>
                                <div className='spacer-30' />
                                <div className='stats-grid'>
                                    <div className='stat-item'>
                                        <h3>2,000+</h3>
                                        <p>Happy Learners</p>
                                    </div>
                                    <div className='stat-item'>
                                        <h3>95%</h3>
                                        <p>Placement Rate</p>
                                    </div>
                                    <div className='stat-item'>
                                        <h3>4.9+</h3>
                                        <p>Average Rating</p>
                                    </div>
                                    <div className='stat-item'>
                                        <h3>50+</h3>
                                        <p>Industry Partners</p>
                                    </div>
                                </div>
                            </div>
                            <div className='spacer-50' />
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} className='text-center scroll-anime bottom'>
                            <div className='border-box-pnl'>
                                <h3>Ready to Start Your <span>Tech Journey?</span></h3>
                                <div className='spacer-20' />
                                <h4 className='fw-bold'>Join thousands of successful graduates who transformed their careers with IBT Learning</h4>
                                <div className='spacer-20' />
                                <p><b className='text-white'>Contact us today</b> to learn more about our programs and how we can help you achieve your tech career goals.</p>
                            </div>
                            <div className='spacer-50' />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default AboutUs;