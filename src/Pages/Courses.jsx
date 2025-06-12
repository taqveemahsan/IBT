import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Nav, Tab } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import iconai from "../Assets/Imags/Icons/icon-ai.png";
import iconpython from "../Assets/Imags/Icons/icon-python.png";
import iconblockchain from "../Assets/Imags/Icons/icon-blockchain.png";
import iconmining from "../Assets/Imags/Icons/icon-mining.png";

// Import course content components
import AiCoursesContent from './Courses/AiCoursesContent';
import PythonCoursesContent from './Courses/PythonCoursesContent';
import MernStackContent from './Courses/MernStackContent';
import BlockchainCoursesContent from './Courses/BlockchainCoursesContent';
import MiningWorkshopContent from './Courses/MiningWorkshopContent';

function Courses() {
    const [animatedElements, setAnimatedElements] = useState([]);
    const [activeTab, setActiveTab] = useState('ai');

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

    const coursesTabs = [
        {
            key: 'ai',
            title: 'Artificial Intelligence',
            icon: iconai,
            component: <AiCoursesContent />
        },
        {
            key: 'python',
            title: 'Python Programming',
            icon: iconpython,
            component: <PythonCoursesContent />
        },
        {
            key: 'mern',
            title: 'MERN Stack',
            icon: iconai,
            component: <MernStackContent />
        },
        {
            key: 'blockchain',
            title: 'Blockchain',
            icon: iconblockchain,
            component: <BlockchainCoursesContent />
        },
        {
            key: 'mining',
            title: 'Mining Workshop',
            icon: iconmining,
            component: <MiningWorkshopContent />
        }
    ];

    return (
        <>
            <Container fluid className='courses-tabs-page'>
                <Container>
                    <Row>
                        <Col xl="12" lg="12" md="12" className='text-center scroll-anime top'>
                            <div className='spacer-80' />
                            <h2>Our <span>Courses</span></h2>
                            <h4>Choose your path to success with our comprehensive tech programs</h4>
                            <div className='spacer-50' />
                        </Col>
                    </Row>

                    <Row>
                        <Col xl="12" lg="12" md="12">
                            <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                                <div className="courses-tabs-wrapper scroll-anime bottom">
                                    <Nav variant="pills" className="courses-nav-tabs">
                                        {coursesTabs.map((course) => (
                                            <Nav.Item key={course.key}>
                                                <Nav.Link eventKey={course.key} className="course-tab">
                                                    <div className="tab-icon">
                                                        <Image src={course.icon} alt={course.title} />
                                                    </div>
                                                    <span className="tab-title">{course.title}</span>
                                                </Nav.Link>
                                            </Nav.Item>
                                        ))}
                                    </Nav>
                                </div>

                                <div className="courses-tab-content scroll-anime bottom">
                                    <Tab.Content>
                                        {coursesTabs.map((course) => (
                                            <Tab.Pane key={course.key} eventKey={course.key}>
                                                {course.component}
                                            </Tab.Pane>
                                        ))}
                                    </Tab.Content>
                                </div>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default Courses;