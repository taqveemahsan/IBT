import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { InnerHeader } from '../Components/Header';
import heroimg from "../Assets/Imags/Bg/bg.jpg";
import iconai from "../Assets/Imags/Icons/icon-ai.png";
import ai from "../Assets/Imags/Courses/ai.png";
import iconpython from "../Assets/Imags/Icons/icon-python.png";
import python from "../Assets/Imags/Courses/python.png";
import iconblockchain from "../Assets/Imags/Icons/icon-blockchain.png";
import blockchain from "../Assets/Imags/Courses/blockchain.png";
import iconmining from "../Assets/Imags/Icons/icon-mining.png";
import mining from "../Assets/Imags/Courses/mining.png";
import arrow from "../Assets/Imags/Icons/icon-arrow.svg";
import { Image } from 'react-bootstrap';

const coursesData = [
    {
        id: 1,
        title: "Artificial Intelligence Course",
        subtitle: "3-Month Artificial Intelligence Program",
        description: "Master AI from scratch! Build smart systems, analyze data, and create projects like chatbots or image recognizers. Perfect for students, job seekers, and professionals looking to enter the AI field with real-world Pakistani business applications.",
        duration: "3 Months (12 Weeks)",
        level: "Beginner to Advanced",
        format: "Onsite Classes with Computers Provided",
        icon: iconai,
        image: ai,
        alt: "AI Courses",
        link: "/AiCourses",
        highlights: [
            "AI & Python foundations from scratch",
            "Machine Learning algorithms & neural networks",
            "Natural Language Processing & chatbots",
            "Computer Vision & image recognition"
        ],
        tools: ["Python", "TensorFlow", "Keras", "Scikit-learn"],
        certification: "IBT AI Certificate - Industry Recognized",
        placement: "95% placement rate in AI/ML roles"
    },
    {
        id: 2,
        title: "Python Course",
        subtitle: "3-Month Programming & Development",
        description: "Master Python from zero to hero! Build real-world applications, automate tasks, and create projects like billing systems or web apps. Perfect for beginners with no coding experience to become job-ready developers.",
        duration: "3 Months (12 Weeks)",
        level: "Beginner Friendly",
        format: "Onsite Classes with Computers Provided",
        icon: iconpython,
        image: python,
        alt: "Python Courses",
        link: "/PythonCourses",
        highlights: [
            "Python syntax and data structures",
            "Object-oriented programming",
            "Web development with Flask",
            "Database management & automation"
        ],
        tools: ["Python 3.x", "Flask", "MongoDB", "Pandas"],
        certification: "IBT Python Programming Certificate",
        placement: "90% placement rate in development roles"
    },
    {
        id: 3,
        title: "MERN Stack Course",
        subtitle: "3-Month Full Stack Developer Program",
        description: "Become a full stack developer with MongoDB, Express.js, React, and Node.js. Build practical web apps like online stores or job portals for Pakistani businesses.",
        duration: "3 Months (12 Weeks)",
        level: "Beginner Friendly",
        format: "Onsite Classes with Computers Provided",
        icon: iconai,
        image: blockchain,
        alt: "MERN Stack Course",
        link: "/MernStack",
        highlights: [
            "JavaScript, HTML & CSS fundamentals",
            "React hooks and state management",
            "Node.js APIs with Express.js",
            "MongoDB database integration"
        ],
        tools: ["MongoDB", "Express.js", "React", "Node.js"],
        certification: "IBT MERN Stack Developer Certificate",
        placement: "95% placement rate in full stack roles"
    },
    {
        id: 4,
        title: "Blockchain Course",
        subtitle: "3-Month Blockchain Development Program",
        description: "Master blockchain technology from scratch! Build decentralized applications, create tokens, and explore trending concepts like NFTs and DeFi. Perfect for students, job seekers, and professionals looking to enter the blockchain field.",
        duration: "3 Months (12 Weeks)",
        level: "Beginner to Advanced",
        format: "Onsite Classes with Computers Provided",
        icon: iconblockchain,
        image: blockchain,
        alt: "Blockchain Courses",
        link: "/BlockchainCourses",
        highlights: [
            "Blockchain fundamentals & cryptography",
            "Smart contract development with Solidity",
            "DeFi applications & token creation",
            "NFTs and decentralized applications"
        ],
        tools: ["Solidity", "Web3.js", "Truffle", "MetaMask"],
        certification: "IBT Blockchain Development Certificate",
        placement: "85% placement rate in blockchain roles"
    },
    {
        id: 5,
        title: "Blockchain Mining Workshop",
        subtitle: "2-Week Blockchain Mining Program",
        description: "Master blockchain mining from scratch! Set up hardware, join pools, and explore staking on modern networks.",
        duration: "2 Weeks (10 Days)",
        level: "Beginner Friendly",
        format: "Onsite Workshop with Computers Provided",
        icon: iconmining,
        image: mining,
        alt: "Mining Workshop",
        link: "/MiningWorkshop",
        highlights: [
            "Set up mining software and wallets",
            "Join pools and simulate mining",
            "Explore PoW vs. PoS and staking",
            "Calculate profitability & security"
        ],
        tools: ["CGMiner", "BFGMiner", "MetaMask", "Phantom"],
        certification: "IBT Blockchain Mining Certificate",
        placement: "80% placement in blockchain infrastructure roles"
    }
];

function Courses() {
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
                heading="ALL"
                highlight="COURSES"
                description="Discover our comprehensive range of tech bootcamps designed to transform your career. From AI and Python to Blockchain, we offer industry-aligned programs that prepare you for the future of technology."
                bgImages={[heroimg]}
            />

            <Container fluid className='courses-main-page'>
                <Container>
                    <Row>
                        <Col xl="12" lg="12" md="12" className='text-center scroll-anime top'>
                            <div className='spacer-50' />
                            <h2>Choose Your <span>Tech Journey</span></h2>
                            <h4>Ready for intensive, outcome-driven learning? Our Bootcamps are built to transform you into an industry-ready professional.</h4>
                            <div className='spacer-50' />
                        </Col>
                    </Row>

                    <Row>
                        {coursesData.map((course, index) => (
                            <Col xl="6" lg="6" md="12" key={course.id} className='mb-4'>
                                <div className={`course-detail-card scroll-anime ${index % 2 === 0 ? 'left' : 'right'}`}>
                                    <div className="course-header">
                                        <div className="course-icon">
                                            <Image src={course.icon} alt={course.alt} />
                                        </div>
                                        <div className="course-title-section">
                                            <h3>{course.title}</h3>
                                            <p className="course-subtitle">{course.subtitle}</p>
                                        </div>
                                    </div>

                                    <div className="course-image">
                                        <Image src={course.image} alt={course.alt} />
                                    </div>

                                    <div className="course-content">
                                        <p className="course-description">{course.description}</p>
                                        
                                        <div className="course-meta">
                                            <div className="meta-item">
                                                <span className="meta-label">Duration:</span>
                                                <span className="meta-value">{course.duration}</span>
                                            </div>
                                            <div className="meta-item">
                                                <span className="meta-label">Level:</span>
                                                <span className="meta-value">{course.level}</span>
                                            </div>
                                            <div className="meta-item">
                                                <span className="meta-label">Format:</span>
                                                <span className="meta-value">{course.format}</span>
                                            </div>
                                        </div>

                                        <div className="course-highlights">
                                            <h5>What You'll Learn:</h5>
                                            <ul>
                                                {course.highlights.slice(0, 4).map((highlight, idx) => (
                                                    <li key={idx}>{highlight}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="course-tools">
                                            <h5>Technologies:</h5>
                                            <div className="tools-list">
                                                {course.tools.slice(0, 4).map((tool, idx) => (
                                                    <span key={idx} className="tool-tag">{tool}</span>
                                                ))}
                                                {course.tools.length > 4 && <span className="tool-tag">+{course.tools.length - 4} more</span>}
                                            </div>
                                        </div>

                                        <div className="course-stats">
                                            <div className="stat-item">
                                                <span className="stat-value">{course.placement}</span>
                                            </div>
                                            <div className="stat-item">
                                                <span className="stat-label">Certification:</span>
                                                <span className="stat-desc">{course.certification}</span>
                                            </div>
                                        </div>

                                        <div className="course-actions">
                                            <Link className="course-detail-btn" to={course.link}>
                                                View Full Details <Image src={arrow} alt="Arrow" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    <Row>
                        <Col xl="12" className='text-center scroll-anime bottom'>
                            <div className='spacer-50' />
                            <div className='courses-cta-section'>
                                <h2>Ready to Start Your <span>Tech Career?</span></h2>
                                <h4>Join thousands of successful graduates who transformed their careers with IBT Learning</h4>
                                <div className='spacer-30' />
                                <div className="cta-stats">
                                    <div className="cta-stat">
                                        <h3>2,000+</h3>
                                        <p>Happy Learners</p>
                                    </div>
                                    <div className="cta-stat">
                                        <h3>95%</h3>
                                        <p>Placement Rate</p>
                                    </div>
                                    <div className="cta-stat">
                                        <h3>4.9+</h3>
                                        <p>Average Rating</p>
                                    </div>
                                </div>
                                <div className='spacer-30' />
                                <Link className="reg-btn big" to="/">Talk to Our Advisors</Link>
                            </div>
                            <div className='spacer-50' />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default Courses;