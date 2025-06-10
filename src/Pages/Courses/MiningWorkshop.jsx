import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { InnerHeader } from '../../Components/Header';
import heroimg from "../../Assets/Imags/Bg/mining-bg.png";
function MiningWorkshop() {
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
                heading="Blockchain"
                highlight="Mining Workshop"
                description="Designed to give you hands-on experience on DevOps tools and best practices about continuous development, continuous testing, and configuration management, including continuous integration and deployment and continuous monitoring of the software throughout its development life cycle."
                bgImages={[heroimg]}
            />

            <Container fluid className='inner-page'>
                <Container>
                    <Row>
                        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} className='text-center scroll-anime bottom'>
                            <div className='border-box-pnl'>
                                <h3>Course <span>Description</span></h3>
                                <div className='spacer-20' />
                                <p>A practical workshop focused on blockchain mining protocols, node setup, consensus mechanisms, and real-time analytics. Learn about energy-efficient mining, Proof-of-Work, Proof-of-Stake, and the environmental impact of blockchain infrastructure.</p>
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
                                <li>Blockchain enthusiasts ready to explore backend infrastructure</li>
                                <li>
                                    IT professionals and system administrators
                                </li>
                                <li>
                                    Tech learners pursuing careers in mining operations and blockchain architecture
                                </li>
                                <li>
                                    Developers and engineers interested in node management and consensus
                                </li>
                            </ul>
                            <div className='spacer-20' />
                            <p>
                                Some basic knowledge of blockchain concepts is recommended.
                            </p>
                            <div className='spacer-40' />
                            <h3><span className='box-span' />  Learning <span>Outcomes</span></h3>
                            <div className='spacer-20' />
                            <ul className='dot-list'>
                                <li> Set up and configure blockchain nodes for Bitcoin and Ethereum</li>
                                <li> Understand Proof-of-Work, Proof-of-Stake, mining difficulty, and reward mechanisms</li>
                                <li> Analyze real-time blockchain data with Grafana and Prometheus</li>
                                <li> Explore block validation, forks, and network security in mining</li>
                                <li> Learn about sustainability and environmental considerations in blockchain mining</li>
                                <li> Learn to interact with blockchain systems via CLI and JSON-RPC</li>
                            </ul>

                            <div className='spacer-40' />
                            <h3><span className='box-span' />  <span>Tools & Technologies</span> Covered </h3>
                            <div className='spacer-20' />
                            <h4><b className='text-white'>Node Software:</b>   Bitcoin Core, Ethereum Node, Geth</h4>
                            <h4><b className='text-white'>Monitoring & Analytics: </b>  Grafana, Prometheus</h4>
                            <h4><b className='text-white'>Dev Tools:  </b>  CLI, JSON-RPC</h4>
                            <h4><b className='text-white'>Ecosystem:  </b>   Mining Pools, Network Simulators</h4>
                            <div className='spacer-40' />
                            <h3><span className='box-span' />  <span>Real-World</span> Experience</h3>
                            <div className='spacer-20' />
                            <h4>Simulate a private <b className='text-white'> blockchain</b> network to experience <b className='text-white'> block creation, peer discovery,</b> and <b className='text-white'> transaction</b> validation.</h4>
                            <div className='spacer-40' />
                            <h3><span className='box-span' />  <span>Certification</span></h3>
                            <div className='spacer-20' />
                            <h4><b className='text-white'>IBT Blockchain Mining Certificate </b>— demonstrating technical expertise in decentralized infrastructure.</h4>
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
export default MiningWorkshop; 