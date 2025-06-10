import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { InnerHeader } from '../../Components/Header';
import heroimg from "../../Assets/Imags/Bg/ai-bg.png";
import { Link } from 'react-router-dom';
function AiCourses() {
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
                heading="AI"
                highlight="Courses"
                description="Learn the fundamentals of artificial intelligence, machine learning, and automation through real-world projects."
                bgImages={[heroimg]}
            />

            <Container fluid className='inner-page'>
                <Container>
                    <Row>
                        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} className='text-center scroll-anime bottom'>
                            <div className='border-box-pnl'>
                                <h3>Course <span>Description</span></h3>
                                <div className='spacer-20' />
                                <p>This immersive AI Bootcamp empowers you to master the core principles and cutting-edge applications of Artificial Intelligence, Machine Learning, and automation. Through hands-on projects and industry-driven curriculum, you will design, build, and deploy intelligent systems that solve real-world challenges across multiple sectors. Gain expertise in both foundational AI and the latest advances in Generative AI and responsible AI practices.</p>
                            </div>
                            <div className='spacer-50' />
                        </Col>
                        <Col xl="12" lg="12" md="12" className='scroll-anime bottom'>
                            <h3><span className='box-span' /> Who Should <span>Enroll</span></h3>
                            <p>
                                This course is perfect for:
                            </p>
                            <div className='spacer-20' />
                            <ul className='dot-list'>
                                <li>Aspiring data scientists & AI engineers</li>
                                <li>
                                    Developers looking to upskill into AI roles
                                </li>
                                <li>
                                    Tech professionals and enthusiasts exploring AI careers
                                </li>
                            </ul>
                            <div className='spacer-20' />
                            <p>
                                No prior AI experience is required, but basic knowledge of programming and math is recommended.
                            </p>
                            <div className='spacer-40' />
                            <h3><span className='box-span' />  Learning <span>Outcomes</span></h3>
                            <div className='spacer-20' />
                            <ul className='dot-list'>
                                <li>Core AI and Machine Learning fundamentals</li>
                                <li>How to build, train & evaluate ML models and neural networks</li>
                                <li>Generative AI techniques, including prompt engineering</li>
                                <li>Natural Language Processing (NLP) using real-world data</li>
                                <li>Ethical & Responsible AI frameworks and best practices</li>
                                <li>How to deploy AI in healthcare, finance, retail, and beyond</li>
                            </ul>
                            <div className='spacer-40' />
                            <h3><span className='box-span' />  <span>Tools & Technologies</span> Covered </h3>
                            <div className='spacer-20' />
                            <h4><b className='text-white'>Programming & ML:</b> Python, TensorFlow, Keras, Scikit-learn</h4>
                            <h4><b className='text-white'>Vision & NLP:</b> OpenCV, NLTK, GPT APIs</h4>
                            <h4><b className='text-white'>Development Environments: </b> Jupyter Notebook, Google Colab</h4>
                            <div className='spacer-40' />
                            <h3><span className='box-span' />  <span>Real-World</span> Experience</h3>
                            <div className='spacer-20' />
                            <h4>Work on live datasets to solve classification, regression, NLP challenges, and generative AI applications</h4>
                            <div className='spacer-40' />
                            <h3><span className='box-span' />  <span>Certification</span></h3>
                            <div className='spacer-20' />
                            <h4><b className='text-white'>IBT AI Bootcamp</b> Completion Certificate — recognized by industry partners and ideal for <Link to="/">LinkedIn</Link> and <Link to="/">GitHub</Link> portfolios.</h4>
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
export default AiCourses; 