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
                heading="IBT 3-Month"
                highlight="AI Course"
                description="Whether you're a student, job seeker, or professional, this course is for everyone to learn AI from scratch. Build smart systems, analyze data, and create projects like chatbots or image recognizers. Join IBT to become an AI expert and boost your career!"
                bgImages={[heroimg]}
            />

            <Container fluid className='inner-page'>
                <Container>
                    <Row>
                        {/* <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} className='text-center scroll-anime bottom'>
                            <div className='border-box-pnl'>
                                <h3>Course <span>Overview</span></h3>
                                <div className='spacer-20' />
                                <p>Welcome to IBT's 3-Month Artificial Intelligence (AI) Course! Whether you're a student, job seeker, or professional, this course is for everyone to learn AI from scratch. Build smart systems, analyze data, and create projects like chatbots or image recognizers used in the world and beyond. Join IBT to become an AI expert and boost your career!</p>
                            </div>
                            <div className='spacer-50' />
                        </Col>

                        <Col xl="12" lg="12" md="12" className='scroll-anime bottom'>
                            <h3><span className='box-span' /> Why Join <span>IBT's AI Course?</span></h3>
                            <div className='spacer-20' />
                            <ul className='dot-list'>
                                <li><b className='text-white'>For All Levels:</b> Start with no AI knowledge and end with job-ready skills!</li>
                                <li><b className='text-white'>Practical Learning:</b> Build real-world projects like recommendation systems or chatbots for Pakistani businesses.</li>
                                <li><b className='text-white'>Onsite Classes:</b> Learn in IBT's classrooms with expert guidance and hands-on labs.</li>
                                <li><b className='text-white'>Career Boost:</b> AI is booming in freelancing, startups, and global tech jobs.</li>
                                <li><b className='text-white'>Certificate:</b> Earn an IBT certificate to shine on your CV.</li>
                                <li><b className='text-white'>Local & Affordable:</b> Designed for Pakistani students with flexible timings and budget-friendly fees.</li>
                            </ul>
                            <div className='spacer-40' />
                        </Col>

                        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} className='text-center scroll-anime bottom'>
                            <div className='border-box-pnl'>
                                <h3>Course <span>Details</span></h3>
                                <div className='spacer-20' />
                                <h4 className='fw-bold'><b className='text-white'>Duration:</b> 3 months (12 weeks)</h4>
                                <h4 className='fw-bold'><b className='text-white'>Location:</b> IBT Institute (onsite classes with computers provided)</h4>
                                <h4 className='fw-bold'><b className='text-white'>Who Can Join:</b> Anyone! Students, professionals, or hobbyists. Basic Python knowledge is a plus but not required.</h4>
                                <h4 className='fw-bold'><b className='text-white'>Requirements:</b> Just enthusiasm to learn AI—no advanced skills needed!</h4>
                            </div>
                            <div className='spacer-50' />
                        </Col> */}

                        <Col xl="12" lg="12" md="12" className='scroll-anime bottom'>
                            <h3><span className='box-span' /> 3-Month <span>Roadmap: What You'll Learn</span></h3>
                            <div className='spacer-30' />

                            {/* Month 1 */}
                            <div className='month-section'>
                                <h3 className='month-title'><span>Month 1:</span> AI & Python Foundations – Start Your AI Journey</h3>
                                <p className='month-desc'>Get the basics of AI and Python to build a strong foundation.</p>
                                <div className='spacer-20' />

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 1: Introduction to AI</b></h4>
                                    <ul className='dot-list'>
                                        <li>What is AI? Its role in Pakistan (e.g., e-commerce, healthcare).</li>
                                        <li>Types of AI: Machine Learning, Deep Learning, NLP, Computer Vision.</li>
                                        <li>Set up Python, VS Code, and libraries (numpy, pandas).</li>
                                        <li><b className='text-white'>Practice:</b> Write a simple Python program to process data.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 2: Python for AI</b></h4>
                                    <ul className='dot-list'>
                                        <li>Python essentials: variables, loops, functions, lists, dictionaries.</li>
                                        <li>Libraries for AI: numpy (math), pandas (data handling).</li>
                                        <li><b className='text-white'>Mini-project:</b> Analyze a dataset (e.g., sales data of a Karachi store).</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 3: Data Preprocessing</b></h4>
                                    <ul className='dot-list'>
                                        <li>Clean and prepare data for AI (e.g., handle missing values).</li>
                                        <li>Use pandas to organize datasets.</li>
                                        <li><b className='text-white'>Practice:</b> Clean a dataset of customer reviews.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 4: Intro to Machine Learning</b></h4>
                                    <ul className='dot-list'>
                                        <li>What is Machine Learning? Supervised vs. unsupervised learning.</li>
                                        <li>Use scikit-learn for simple predictions (e.g., predict house prices).</li>
                                        <li><b className='text-white'>Mini-project:</b> Build a program to predict student grades.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Month 2 */}
                            <div className='month-section'>
                                <h3 className='month-title'><span>Month 2:</span> Core AI Concepts – Build Smart Systems</h3>
                                <p className='month-desc'>Dive into machine learning and create intelligent applications.</p>
                                <div className='spacer-20' />

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 5: Machine Learning Algorithms</b></h4>
                                    <ul className='dot-list'>
                                        <li>Linear regression, decision trees, and K-nearest neighbors.</li>
                                        <li>Train models with scikit-learn.</li>
                                        <li><b className='text-white'>Practice:</b> Build a model to predict sales for a local shop.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 6: Evaluating AI Models</b></h4>
                                    <ul className='dot-list'>
                                        <li>Accuracy, precision, recall, and confusion matrix.</li>
                                        <li>Test and improve your models.</li>
                                        <li><b className='text-white'>Mini-project:</b> Evaluate a model for customer churn prediction.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 7: Intro to Neural Networks</b></h4>
                                    <ul className='dot-list'>
                                        <li>What are neural networks? Basics of deep learning.</li>
                                        <li>Use TensorFlow/Keras to build a simple neural network.</li>
                                        <li><b className='text-white'>Practice:</b> Create a model to classify text (e.g., positive/negative reviews).</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 8: Natural Language Processing (NLP)</b></h4>
                                    <ul className='dot-list'>
                                        <li>Basics of NLP: text processing, sentiment analysis.</li>
                                        <li>Use libraries like NLTK or spaCy.</li>
                                        <li><b className='text-white'>Mini-project:</b> Build a simple chatbot for a Pakistani business.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Month 3 */}
                            <div className='month-section'>
                                <h3 className='month-title'><span>Month 3:</span> Advanced AI & Projects – Become an AI Pro</h3>
                                <p className='month-desc'>Apply AI to real-world problems and build a portfolio.</p>
                                <div className='spacer-20' />

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 9: Computer Vision Basics</b></h4>
                                    <ul className='dot-list'>
                                        <li>Intro to computer vision with OpenCV.</li>
                                        <li>Process images and detect objects.</li>
                                        <li><b className='text-white'>Practice:</b> Build a program to recognize handwritten digits.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 10: Advanced AI Applications</b></h4>
                                    <ul className='dot-list'>
                                        <li>Recommendation systems (e.g., suggest products for an online store).</li>
                                        <li>Time-series forecasting (e.g., predict sales trends).</li>
                                        <li><b className='text-white'>Mini-project:</b> Create a recommendation system for a local e-commerce site.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 11: Deploying AI Models</b></h4>
                                    <ul className='dot-list'>
                                        <li>Save and deploy models using Flask or Streamlit.</li>
                                        <li>Create a web app to showcase your AI model.</li>
                                        <li><b className='text-white'>Practice:</b> Build a web app to predict prices for a real estate agency.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 12: Final Project & Showcase</b></h4>
                                    <p>Build a capstone project (choose one):</p>
                                    <ul className='dot-list'>
                                        <li>Chatbot for customer support (e.g., for a Pakistani telecom company).</li>
                                        <li>Image classifier (e.g., identify products in a store).</li>
                                        <li>Sales predictor for a local business.</li>
                                        <li>Sentiment analyzer for social media posts.</li>
                                    </ul>
                                    <p><b className='text-white'>Present your project to the class and earn your IBT AI certificate!</b></p>
                                </div>
                            </div>

                            <div className='spacer-40' />
                            <h3><span className='box-span' /> What You'll <span>Gain</span></h3>
                            <div className='spacer-20' />
                            <ul className='dot-list'>
                                <li><b className='text-white'>Skills:</b> Master AI tools like scikit-learn, TensorFlow, and OpenCV to build smart systems.</li>
                                <li><b className='text-white'>Projects:</b> A portfolio of 3-5 AI projects to impress employers or clients.</li>
                                <li><b className='text-white'>Career Paths:</b> Freelance on Upwork/Fiverr, join tech startups, or pursue data science/AI roles.</li>
                                <li><b className='text-white'>Community:</b> Join IBT's student network for support and job leads in Pakistan.</li>
                            </ul>

                            <div className='spacer-40' />
                            <h3><span className='box-span' /> Why Choose <span>IBT?</span></h3>
                            <div className='spacer-20' />
                            <ul className='dot-list'>
                                <li><b className='text-white'>Local Focus:</b> Projects tailored for Pakistani industries (e-commerce, education, healthcare).</li>
                                <li><b className='text-white'>Expert Instructors:</b> Learn from AI pros in Urdu/English for easy understanding.</li>
                                <li><b className='text-white'>Hands-On Labs:</b> Use IBT's computers to code and experiment in class.</li>
                                <li><b className='text-white'>Affordable Fees:</b> Budget-friendly for Pakistani students (contact IBT for details).</li>
                                <li><b className='text-white'>Job Support:</b> Guidance on freelancing and tech jobs in Pakistan and abroad.</li>
                            </ul>

                            <div className='spacer-50' />
                        </Col>

                        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} className='text-center scroll-anime bottom'>
                            <div className='border-box-pnl'>
                                <h3>Ready to Shape the Future <span>with AI?</span></h3>
                                <div className='spacer-20' />
                                <h4 className='fw-bold'>Join IBT's AI Course and become an AI expert in just 3 months! 🚀</h4>
                                <div className='spacer-20' />
                                <p><b className='text-white'>How to Join:</b> Visit IBT Institute to register or learn more.</p>
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