import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { InnerHeader } from '../../Components/Header';
import heroimg from "../../Assets/Imags/Bg/mern-bg.svg";

function MernStack() {
    const [animatedElements, setAnimatedElements] = useState([]);

    function isElementInViewport(elem) {
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const elemTop = elem.getBoundingClientRect().top + scroll;
        return elemTop - scroll < windowHeight;
    }

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
        animateSections();
        window.addEventListener('scroll', animateSections);
        return () => {
            window.removeEventListener('scroll', animateSections);
        };
    }, []);

    return (
        <>
            <InnerHeader
                heading="MERN Stack Web Wizard"
                highlight="Bootcamp"
                description="Welcome to IBT’s 3-Month MERN Stack Web Wizard Bootcamp! Whether you’re a student, a professional, or a coding newbie anywhere in Pakistan, this course will turn you into a full stack web developer using MongoDB, Express.js, React, and Node.js. Build killer apps like online shops or job boards for desi businesses and launch your career into orbit. Join IBT to master MERN and code your way to success!"
                bgImages={[heroimg]}
            />

            <Container fluid className='inner-page'>
                <Container>
                    <Row>
                        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} className='text-center scroll-anime bottom'>
                            <div className='border-box-pnl'>
                                <h3>Course <span>Overview</span></h3>
                                <div className='spacer-20' />
                                <p>Welcome to IBT’s 3-Month MERN Stack Web Wizard Bootcamp! Whether you’re a student, a professional, or a coding newbie anywhere in Pakistan, this course will turn you into a full stack web developer using MongoDB, Express.js, React, and Node.js. Build killer apps like online shops or job boards for desi businesses and launch your career into orbit. Join IBT to master MERN and code your way to success!</p>
                            </div>
                            <div className='spacer-50' />
                        </Col>

                        <Col xl="12" lg="12" md="12" className='scroll-anime bottom'>
                            <h3><span className='box-span' /> Why Join <span>IBT’s MERN Bootcamp?</span></h3>
                            <div className='spacer-20' />
                            <ul className='dot-list'>
                                <li>Zero to Hero: No coding experience? No tension! Become job-ready in just 3 months.</li>
                                <li>Desi Projects: Build apps like an e-commerce site for a local store or a freelancing platform for Pakistanis.</li>
                                <li>Onsite Coding Labs: Learn hands-on in IBT’s classrooms with pro instructors and free computers.</li>
                                <li>Career Dhamaal: Land freelancing gigs on Upwork, join startups, or score global tech jobs.</li>
                                <li>IBT Certificate: Add a shiny badge to your CV that screams “MERN master”!</li>
                                <li>Pakistani Vibes: Affordable fees, flexible timings, and classes in Urdu/English for easy samajh.</li>
                            </ul>
                            <div className='spacer-40' />
                        </Col>

                        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} className='text-center scroll-anime bottom'>
                            <div className='border-box-pnl'>
                                <h3>Course <span>Details</span></h3>
                                <div className='spacer-20' />
                                <h4 className='fw-bold'><b className='text-white'>Duration:</b> 3 months (12 weeks)</h4>
                                <h4 className='fw-bold'><b className='text-white'>Location:</b> IBT Institute (onsite classes in Pakistan with computers provided)</h4>
                                <h4 className='fw-bold'><b className='text-white'>Who Can Join:</b> Students, professionals, or hobbyists. Basic JavaScript is a bonus but not zaroori.</h4>
                                <h4 className='fw-bold'><b className='text-white'>Requirements:</b> Bas passion to code—no prior experience needed!</h4>
                            </div>
                            <div className='spacer-50' />
                        </Col>

                        <Col xl="12" lg="12" md="12" className='scroll-anime bottom'>
                            <h3><span className='box-span' /> Roadmap: <span>What You’ll Learn</span></h3>
                            <div className='spacer-30' />

                            {/* Month 1 */}
                            <div className='month-section'>
                                <h3 className='month-title'><span>Month 1:</span> Web Basics – Kickstart Your Coding Journey</h3>
                                <p className='month-desc'>Lay the groundwork with JavaScript, HTML, CSS, and backend fundamentals.</p>
                                <div className='spacer-20' />

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 1: Intro to Full Stack Web Development</b></h4>
                                    <ul className='dot-list'>
                                        <li>What’s full stack development? Its role in Pakistan (e.g., startups, freelancing).</li>
                                        <li>MERN stack breakdown: MongoDB, Express.js, React, Node.js.</li>
                                        <li>Set up your toolkit: Node.js, VS Code, MongoDB Compass, Postman.</li>
                                        <li><b className='text-white'>Practice:</b> Code a simple HTML/CSS webpage for a desi chai stall.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 2: JavaScript & Frontend Magic</b></h4>
                                    <ul className='dot-list'>
                                        <li>JavaScript 101: Variables, loops, functions, and ES6 tricks.</li>
                                        <li>Responsive design with Tailwind CSS or Bootstrap for mobile-friendly pages.</li>
                                        <li><b className='text-white'>Practice:</b> Build a landing page for a Pakistani online clothing brand.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 3: Node.js & Express.js Power</b></h4>
                                    <ul className='dot-list'>
                                        <li>Node.js basics: Event loop, modules, and npm packages.</li>
                                        <li>Create an Express.js server with routes and middleware.</li>
                                        <li><b className='text-white'>Practice:</b> Make a REST API to list products for a local shop.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 4: MongoDB & Backend Setup</b></h4>
                                    <ul className='dot-list'>
                                        <li>MongoDB essentials: Documents, collections, and CRUD operations.</li>
                                        <li>Connect Express.js to MongoDB with Mongoose.</li>
                                        <li><b className='text-white'>Mini-project:</b> Build an API for a school’s student attendance system.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Month 2 */}
                            <div className='month-section'>
                                <h3 className='month-title'><span>Month 2:</span> React & Full Stack Flow – Create Dynamic Apps</h3>
                                <p className='month-desc'>Master React and link frontend to backend for seamless apps.</p>
                                <div className='spacer-20' />

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 5: React Basics</b></h4>
                                    <ul className='dot-list'>
                                        <li>React fundamentals: Components, props, state, and hooks (useState, useEffect).</li>
                                        <li>Build dynamic, interactive user interfaces.</li>
                                        <li><b className='text-white'>Practice:</b> Code a to-do app for a Pakistani student’s daily tasks.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 6: Advanced React</b></h4>
                                    <ul className='dot-list'>
                                        <li>Navigate with React Router, manage forms, and use context API.</li>
                                        <li>Fetch data from your Express.js API in React.</li>
                                        <li><b className='text-white'>Practice:</b> Create a multi-page portfolio site for a desi freelancer.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 7: Full Stack Integration</b></h4>
                                    <ul className='dot-list'>
                                        <li>Connect React frontend to Express.js backend for full-stack magic.</li>
                                        <li>Implement CRUD operations (e.g., add/edit/delete job postings).</li>
                                        <li><b className='text-white'>Mini-project:</b> Build a job board with frontend and backend for Pakistani freelancers.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 8: Authentication & Security</b></h4>
                                    <ul className='dot-list'>
                                        <li>Add user login/signup with JWT and bcrypt.</li>
                                        <li>Secure APIs and manage user sessions like a pro.</li>
                                        <li><b className='text-white'>Practice:</b> Add authentication to your job board app.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Month 3 */}
                            <div className='month-section'>
                                <h3 className='month-title'><span>Month 3:</span> Advanced MERN & Projects – Become a Web Wizard</h3>
                                <p className='month-desc'>Deploy real-world apps and build a portfolio to impress clients.</p>
                                <div className='spacer-20' />

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 9: State Management & APIs</b></h4>
                                    <ul className='dot-list'>
                                        <li>Manage complex state with Redux Toolkit or React Context.</li>
                                        <li>Integrate third-party APIs (e.g., JazzCash or EasyPaisa for payments).</li>
                                        <li><b className='text-white'>Practice:</b> Add a payment feature to an e-commerce app.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 10: Deployment & DevOps</b></h4>
                                    <ul className='dot-list'>
                                        <li>Deploy MERN apps to Vercel, Render, or Heroku.</li>
                                        <li>Use MongoDB Atlas for cloud databases.</li>
                                        <li><b className='text-white'>Practice:</b> Launch your job board app live on the web.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 11: Performance & Polish</b></h4>
                                    <ul className='dot-list'>
                                        <li>Optimize React apps with lazy loading and memoization.</li>
                                        <li>Boost backend speed with MongoDB indexing and caching.</li>
                                        <li><b className='text-white'>Practice:</b> Make your e-commerce app lightning-fast for users.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 12: Final Project & Showtime</b></h4>
                                    <p>Build a capstone project (choose one):</p>
                                    <ul className='dot-list'>
                                        <li>E-commerce site for a Pakistani store (products, cart, payments).</li>
                                        <li>Job portal for local freelancers (post jobs, apply, chat).</li>
                                        <li>Inventory tracker for a small business in Lahore or Karachi.</li>
                                        <li>Dashboard for a startup’s social media analytics.</li>
                                    </ul>
                                    <p><b className='text-white'>Present your project to the class and grab your IBT MERN Stack certificate!</b></p>
                                </div>
                            </div>

                            <div className='spacer-40' />
                            <h3><span className='box-span' /> What You’ll <span>Gain</span></h3>
                            <div className='spacer-20' />
                            <ul className='dot-list'>
                                <li><b className='text-white'>Skills:</b> Master MongoDB, Express.js, React, and Node.js to build cutting-edge web apps.</li>
                                <li><b className='text-white'>Portfolio:</b> 3-5 full-stack projects to wow employers or clients.</li>
                                <li><b className='text-white'>Career Paths:</b> Freelance on Upwork/Fiverr, join desi startups, or land global developer roles.</li>
                                <li><b className='text-white'>Community:</b> Connect with IBT’s student network for job leads and support in Pakistan.</li>
                            </ul>

                            <div className='spacer-40' />
                            <h3><span className='box-span' /> Why Choose <span>IBT?</span></h3>
                            <div className='spacer-20' />
                            <ul className='dot-list'>
                                <li><b className='text-white'>Desi Focus:</b> Projects built for Pakistani needs (e-commerce, freelancing, startups).</li>
                                <li><b className='text-white'>Pro Instructors:</b> Learn from MERN experts in Urdu/English for clear samajh.</li>
                                <li><b className='text-white'>Hands-On Labs:</b> Code on IBT’s computers in our classrooms.</li>
                                <li><b className='text-white'>Budget-Friendly:</b> Affordable fees for Pakistani students (contact IBT for details).</li>
                                <li><b className='text-white'>Job Support:</b> Tips for freelancing and tech jobs in Pakistan and abroad.</li>
                            </ul>

                            <div className='spacer-50' />
                        </Col>

                        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} className='text-center scroll-anime bottom'>
                            <div className='border-box-pnl'>
                                <h3>Ready to Become a MERN Stack <span>Web Wizard?</span></h3>
                                <div className='spacer-20' />
                                <h4 className='fw-bold'>Join IBT’s Bootcamp and code your future in just 3 months! 🚀</h4>
                                <div className='spacer-20' />
                                <p><b className='text-white'>How to Join:</b> Visit IBT to sign up or get more info.</p>
                            </div>
                            <div className='spacer-50' />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default MernStack;
