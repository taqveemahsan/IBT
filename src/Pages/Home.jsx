import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TalkToAdvisor from '../Components/TalkToAdvisor';
import Frequentlyquestion from '../Components/Frequentlyquestion';
import { Header } from '../Components/Header';
import CoursesPost from '../Components/Courses';
import Certificationpost from '../Components/certification-post';
import { CareerPost, EasyStepPost, ScalePost, WhyIbtPost } from '../Components/Posts';
import { ApplyNowButton, ViewallButton } from '../Components/Buttons';
import TeamMarquee from '../Components/TeamMarquee';
import StoriesPosts from '../Components/Stories-Posts';
function Home() {
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
            {/* Header Starts Here */}
            <Header />
            {/* Header Ends Here */}
            <div className='home-main'>
                {/* Starts Here */}
                <Container fluid className='section'>
                    <Container>
                        <Row>

                            <Col xl="12" lg="12" md="12" sm="12" className='text-center scroll-anime top'>
                                <h2>
                                    IBT grads grow their careers<br /> <span>you can too.</span>
                                </h2>
                                <div className='spacer-50' />
                            </Col>
                            <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }}>
                                <CareerPost />
                            </Col>
                        </Row>
                    </Container>
                </Container>
                {/* Ends Here */}

                {/* Starts Here */}
                <Container fluid className='section'>
                    <Container>
                        <Row>
                            <Col xl="12" lg="12" md="12" sm="12" className='text-center scroll-anime top'>
                                <h2>
                                    OUR  <span>Courses</span>
                                </h2>
                                <h4>Ready for intensive, outcome-driven learning? Our Bootcamps are built to transform you.</h4>
                                <div className='spacer-50' />
                            </Col>
                            <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }}>
                                <CoursesPost />
                            </Col>
                        </Row>
                    </Container>
                </Container>
                {/* Ends Here */}

                {/* Starts Here */}
                <Container fluid className='section'>
                    <Container>
                        <Row>
                            <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} className='text-center scroll-anime top'>
                                <h2>
                                    WHY  <span>IBT learning</span>
                                </h2>
                                <h4>From our best-in-class instructors to our guaranteed global placement, IBT Learning stands out from the competition. We are not just another online school, we are an outcome-oriented boot camp.</h4>
                                <div className='spacer-50' />
                            </Col>
                            <Col xl="12" lg="12" md="12" sm="12">
                                <WhyIbtPost />
                            </Col>
                            <Col xl="12" lg="12" md="12" sm="12" className='text-center'>
                                <div className='spacer-50' />
                                <ApplyNowButton />
                            </Col>
                        </Row>
                    </Container>
                </Container>
                {/* Ends Here */}

                {/* Starts Here */}
                <Container fluid className='section'>
                    <Container>
                        <Row>

                            <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} className='text-center scroll-anime top'>
                                <h2>
                                    Our Talent,  <span>Their Teams</span>
                                </h2>
                                <h4><b className='text-white fw-semibold'>Our graduates don’t just land jobs—they power innovation.</b><br />
                                    From startups to established tech giants, IBT talent is working behind the scenes of game-changing technologies across the globe</h4>
                                <div className='spacer-50' />
                            </Col>
                        </Row>
                    </Container>
                    <Col xl="12" lg="12" md="12" sm="12">
                        <TeamMarquee />
                    </Col>
                </Container>
                {/* Ends Here */}

                {/* Starts Here */}
                <Container fluid className='section'>
                    <Container>
                        <Row>
                            <Col xl="12" lg="12" md="12" sm="12" className='text-center scroll-anime top'>
                                <h2>
                                    Our talent  <span>stories</span>
                                </h2>
                                <h4>Real people. Real journeys. Real success.<br />
                                    Explore how IBT learners rewrote their stories with tech:</h4>
                                <div className='spacer-50' />
                            </Col>
                            <Col xl="12" lg="12" md="12" sm="12">
                                <div className='story-post-container'>
                                    <StoriesPosts />
                                    <div className='view-all-pnl'><ViewallButton /></div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                {/* Ends Here */}

                {/* Starts Here */}
                <Container fluid className='section'>
                    <Container>
                        <Row>
                            <Col xl="12" lg="12" md="12" sm="12" className='text-center scroll-anime top'>
                                <h2>
                                    KICKSTART YOUR CAREER IN  <span>3 EASY STEPS</span>
                                </h2>
                                <div className='spacer-50' />
                            </Col>
                            <Col xl="12" lg="12" md="12" sm="12">
                                <EasyStepPost />
                            </Col>
                        </Row>
                    </Container>
                </Container>
                {/* Ends Here */}

                {/* Starts Here */}
                <Container fluid className='section'>
                    <Container>
                        <Row>

                            <Col xl="12" lg="12" md="12" sm="12" className='text-center scroll-anime top'>
                                <h2>
                                    Or opt for on-demand &  <span>certification courses.</span>
                                </h2>
                                <h4>Learn at your pace, on your time. Whether you’re a student, a professional, or a lifelong learner, IBT’s on-demand courses let you dive deep into the world of tech—anywhere, anytime. Designed for flexibility, delivered with excellence.</h4>
                                <div className='spacer-50' />
                            </Col>
                            <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }}>
                                <Certificationpost />
                            </Col>
                        </Row>
                    </Container>
                </Container>
                {/* Ends Here */}

                {/* Starts Here */}
                <Container fluid className='section'>
                    <Container>
                        <Row>
                            <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} className='text-center scroll-anime top'>
                                <h2>
                                    IMPACT AT <span>SCALE</span>
                                </h2>
                                <h4>IBT isn’t just producing talent — we’re solving Tech Talent problems for businesses across the globe.</h4>
                                <div className='spacer-50' />
                            </Col>
                            <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }}>
                                <ScalePost />
                            </Col>
                        </Row>
                    </Container>
                </Container>
                {/* Ends Here */}

                {/* Starts Here */}
                <Container fluid className='section'>
                    <Container>
                        <Row>
                            <Col xl="12" lg="12" md="12" sm="12" className='text-center scroll-anime top'>
                                <h2>
                                    Your Questions, <span> Answered</span>
                                </h2>
                            </Col>
                            <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }}>
                                <Frequentlyquestion />
                            </Col>
                        </Row>
                    </Container>
                </Container>
                {/* Ends Here */}

                {/* Starts Here */}
                <Container fluid className='section'>
                    <Container>
                        <Row>
                            <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} className='text-center scroll-anime top'>
                                <h2>
                                    Talk to our <span>advisors</span>
                                </h2>
                                <h4>Welcome to the future of workforce development! IBT Learning is proud to collaborate with governments and organizations to revolutionize tech education at scale. By joining forces, we're empowering entire communities, fostering innovation, and bridging the digital skills gap.</h4>
                                <div className='spacer-50' />
                            </Col>
                            <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }}>
                                <TalkToAdvisor />
                            </Col>
                        </Row>
                    </Container>
                </Container>
                {/* Ends Here */}
            </div>
        </>
    );
}
export default Home; 