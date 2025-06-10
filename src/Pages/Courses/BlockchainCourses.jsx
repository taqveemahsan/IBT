import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { InnerHeader } from '../../Components/Header';
import heroimg from "../../Assets/Imags/Bg/block-bg.png";
import heroblockimg from "../../Assets/Imags/Bg/blockchain-bg.png";
function BlockchainCourses() {
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
                highlight="Courses"
                description=" Perfect for beginners—grasp the concepts that drive decentralized technologies."
                bgImages={[heroimg]}
            />

            <Container fluid className='inner-page'>
                <Container>
                    <Row>
                        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} className='text-center scroll-anime bottom'>
                            <div className='border-box-pnl'>
                                <h3>Course <span>Description</span></h3>
                                <div className='spacer-20' />
                                <p>This foundational course introduces blockchain technology, covering decentralization, cryptography, consensus algorithms, and smart contracts. Learn the latest blockchain trends including Layer 2 solutions, NFTs, and DeFi, preparing you for advanced blockchain development and real-world applications.</p>
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
                                <li>Complete beginners exploring blockchain for the first time</li>
                                <li>
                                    Students and early-career tech professionals
                                </li>
                                <li>
                                    Product managers and entrepreneurs entering the Web3 space
                                </li>
                                <li>
                                    Professionals preparing for blockchain development or investment roles
                                </li>
                            </ul>
                            <div className='spacer-20' />
                            <p>
                                No technical background is required—just curiosity and a passion for innovation.
                            </p>
                            <div className='spacer-40' />
                            <h3><span className='box-span' />  Learning <span>Outcomes</span></h3>
                            <div className='spacer-20' />
                            <ul className='dot-list'>
                                <li> Understand blockchain architecture, transactions, and consensus mechanisms</li>
                                <li> Grasp cryptographic principles and smart contract basics</li>
                                <li> Explore emerging blockchain trends: Layer 2, NFTs, DeFi, and regulatory landscape</li>
                                <li> Learn blockchain security and privacy essentials</li>
                                <li> Discover real-world blockchain applications across industries</li>
                            </ul>

                            <div className='spacer-40' />
                            <h3><span className='box-span' />  <span>Tools & Technologies</span> Covered </h3>
                            <div className='spacer-20' />
                            <h4><b className='text-white'>Core Protocols:</b>  Bitcoin, Ethereum</h4>
                            <h4><b className='text-white'>Wallets & IDEs: </b>  MetaMask, Remix IDE</h4>
                            <h4><b className='text-white'>Exploration & Analytics:  </b>  Etherscan and other blockchain explorers</h4>
                            <div className='spacer-40' />
                            <h3><span className='box-span' />  <span>Real-World</span> Experience</h3>
                            <div className='spacer-20' />
                            <h4><b className='text-white'>Hands-on sandbox activities:</b> wallet management, smart contract deployment, and blockchain data analysis.</h4>
                            <div className='spacer-40' />
                            <h3><span className='box-span' />  <span>Certification</span></h3>
                            <div className='spacer-20' />
                            <h4><b className='text-white'> Certificate of Completion:</b>  Blockchain Foundations — a stepping stone for advanced blockchain paths.</h4>
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
export default BlockchainCourses; 