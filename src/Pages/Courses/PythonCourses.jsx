import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { InnerHeader } from '../../Components/Header';
import heroimg from "../../Assets/Imags/Bg/python-bg.png";
import { Link } from 'react-router-dom';
function PythonCourses() {
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
                heading="Python"
                highlight="Courses"
                description="Master one of the most powerful programming languages used across data science, software, and AI."
                bgImages={[heroimg]}
            />

            <Container fluid className='inner-page'>
                <Container>
                    <Row>
                        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} className='text-center scroll-anime bottom'>
                            <div className='border-box-pnl'>
                                <h3>Course <span>Description</span></h3>
                                <div className='spacer-20' />
                                <p>Our structured Python Bootcamp takes you from the basics to advanced programming skills, covering web development, data science, automation, and scripting. Learn clean coding practices, object-oriented programming, and testing, preparing you for diverse Python applications in tech and data-driven roles.</p>
                            </div>
                            <div className='spacer-50' />
                        </Col>
                        <Col xl="12" lg="12" md="12" className='scroll-anime bottom'>
                            <h3><span className='box-span' /> Who Should <span>Enroll</span></h3>
                            <p>
                                This course is ideal for:
                            </p>
                            <div className='spacer-20' />
                            <ul className='dot-list'>
                                <li>Beginners with no prior coding experience</li>
                                <li>
                                    Professionals transitioning into tech roles
                                </li>
                                <li>
                                    Data enthusiasts looking to build programming confidence
                                </li>
                                <li>
                                    Students & hobbyists aiming to become job-ready developers
                                </li>
                            </ul>
                            <div className='spacer-20' />
                            <p>
                                No prior experience required.
                            </p>
                            <div className='spacer-40' />
                            <h3><span className='box-span' />  Learning <span>Outcomes</span></h3>
                            <div className='spacer-20' />
                            <ul className='dot-list'>
                                <li>Master Python syntax, data structures, and control flows</li>
                                <li>Build object-oriented programs with robust testing and error handling</li>
                                <li>Perform data analysis with Pandas, NumPy, and Matplotlib</li>
                                <li>Create automation tools, web scrapers, and web apps using Flask</li>
                                <li>Use Python to interact with APIs and integrate into basic AI/ML workflows</li>
                            </ul>
                            <div className='spacer-40' />
                            <h3><span className='box-span' />  <span>Tools & Technologies</span> Covered </h3>
                            <div className='spacer-20' />
                            <h4><b className='text-white'>Core Technologies:</b>  Python 3.x, Pandas, NumPy, Matplotlib</h4>
                            <h4><b className='text-white'>Web & Automation: </b> Flask, Selenium, SQLite</h4>
                            <h4><b className='text-white'>Dev Environments:  </b> Jupyter Notebook, VS Code</h4>
                            <div className='spacer-40' />
                            <h3><span className='box-span' />  <span>Real-World</span> Experience</h3>
                            <div className='spacer-20' />
                            <h4>Hands-on coding with file handling, data cleaning, API consumption, automation, and testing best practices.</h4>
                            <div className='spacer-40' />
                            <h3><span className='box-span' />  <span>Certification</span></h3>
                            <div className='spacer-20' />
                            <h4><b className='text-white'> IBT Python Programming</b> Certificate — valued across <b className='text-white'> software</b>, <b className='text-white'> data</b>, and <b className='text-white'> tech industries. </b></h4>
                            <div className='spacer-50' />
                        </Col>
                        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} className='text-center scroll-anime bottom'>
                            <div className='border-box-pnl'>
                                <h3>Bootcamp  <span>Schedule</span></h3>
                                <div className='spacer-20' />
                                <h4 className='fw-bold'>[Insert Date] | Duration: 10 Weeks (Weekday /  Weekend Options)</h4>
                            </div>
                            <div className='spacer-50' />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}
export default PythonCourses; 