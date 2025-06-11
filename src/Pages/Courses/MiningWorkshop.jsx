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
                description="Learn blockchain mining from scratch in this intensive 2-week onsite course. Set up mining hardware, join pools, and explore staking for modern networks."
                bgImages={[heroimg]}
            />

            <Container fluid className='inner-page'>
                <Container>
                    <Row>
                        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} className='text-center scroll-anime bottom'>
                            <div className='border-box-pnl'>
                                <h3>Course <span>Description</span></h3>
                                <div className='spacer-20' />
                                <p>This two-week roadmap introduces mining fundamentals, hardware and software setup, and the basics of staking. You'll configure miners, join testnet pools, and understand how mining supports Bitcoin, Ethereum, and newer blockchains like Solana.</p>
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
                                <li>Students, professionals, or hobbyists with basic computer skills</li>
                                <li>Blockchain enthusiasts seeking practical mining experience</li>
                                <li>Developers curious about staking and PoS networks</li>
                                <li>Anyone looking to understand mining in Pakistan's context</li>
                            </ul>
                            <div className='spacer-20' />
                            <p>
                                No prior mining or coding background required—just enthusiasm to learn.
                            </p>
                            <div className='spacer-40' />
                            <h3><span className='box-span' />  Learning <span>Outcomes</span></h3>
                            <div className='spacer-20' />
                            <ul className='dot-list'>
                                <li>Understand how PoW and PoS secure networks like Bitcoin and Solana</li>
                                <li>Install and configure mining software and wallets</li>
                                <li>Join a testnet mining pool and monitor rewards</li>
                                <li>Calculate profitability based on local electricity costs</li>
                                <li>Set up staking on Solana Devnet</li>
                                <li>Secure wallets and protect mining setups</li>
                            </ul>

                            <div className='spacer-40' />
                            <h3><span className='box-span' />  <span>Tools & Technologies</span> Covered </h3>
                            <div className='spacer-20' />
                            <h4><b className='text-white'>Mining Software:</b> CGMiner, BFGMiner</h4>
                            <h4><b className='text-white'>Wallets:</b> MetaMask, Phantom</h4>
                            <h4><b className='text-white'>Monitoring:</b> Basic profitability calculators</h4>
                            <h4><b className='text-white'>Networks:</b> Bitcoin Testnet, Solana Devnet</h4>
                            <div className='spacer-40' />
                            <h3><span className='box-span' />  <span>Real-World</span> Experience</h3>
                            <div className='spacer-20' />
                            <h4>Simulate a mining rig and track hash rates, then stake tokens on Solana Devnet to earn rewards.</h4>
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
                                <h4 className='fw-bold'>[Insert Date] | Duration: 2 Weeks (10 days, 2-3 hours per session)</h4>
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