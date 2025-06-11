import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { InnerHeader } from '../../Components/Header';
import heroimg from "../../Assets/Imags/Bg/mining-bg.png";

function MiningWorkshop() {
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
                heading="IBT 2-Week"
                highlight="Blockchain Mining Workshop"
                description="Whether you're a student, professional, or enthusiast, this intensive 2-week onsite workshop teaches blockchain mining from scratch. Discover how mining powers networks like Bitcoin and Ethereum, set up your own rig, and explore staking for modern chains like Solana. Join IBT to boost your career in Pakistan's growing blockchain ecosystem!"
                bgImages={[heroimg]}
            />

            <Container fluid className='inner-page'>
                <Container>
                    <Row>
                        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} className='text-center scroll-anime bottom'>
                            <div className='border-box-pnl'>
                                <h3>Course <span>Overview</span></h3>
                                <div className='spacer-20' />
                                <p>Welcome to IBT's 2-Week Blockchain Mining Workshop! This foundational course introduces blockchain mining, covering decentralization, consensus algorithms, and mining hardware/software. You'll gain hands-on experience setting up a mining rig and simulating mining and staking processes.</p>
                            </div>
                            <div className='spacer-50' />
                        </Col>

                        <Col xl="12" lg="12" md="12" className='scroll-anime bottom'>
                            <h3><span className='box-span' /> Why Join <span>IBT's Blockchain Mining Workshop?</span></h3>
                            <div className='spacer-20' />
                            <ul className='dot-list'>
                                <li><b className='text-white'>Beginner-Friendly:</b> Start with no mining experience and learn practical skills in just 2 weeks!</li>
                                <li><b className='text-white'>Hands-On Learning:</b> Set up mining software and simulate mining for real-world applications.</li>
                                <li><b className='text-white'>Onsite Labs:</b> Learn in IBT's classrooms with computers provided and expert guidance.</li>
                                <li><b className='text-white'>Career Boost:</b> Mining skills are in demand for crypto projects, freelancing, and tech startups.</li>
                                <li><b className='text-white'>Certificate:</b> Earn an IBT certificate to enhance your CV.</li>
                                <li><b className='text-white'>Local & Affordable:</b> Tailored for Pakistani learners with budget-friendly fees and flexible timings.</li>
                            </ul>
                            <div className='spacer-40' />
                        </Col>

                        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} className='text-center scroll-anime bottom'>
                            <div className='border-box-pnl'>
                                <h3>Course <span>Details</span></h3>
                                <div className='spacer-20' />
                                <h4 className='fw-bold'><b className='text-white'>Duration:</b> 2 weeks (10 days, 2-3 hours per session)</h4>
                                <h4 className='fw-bold'><b className='text-white'>Location:</b> IBT Institute (onsite classes with computers provided)</h4>
                                <h4 className='fw-bold'><b className='text-white'>Who Can Join:</b> Students, professionals, or hobbyists. Basic computer skills required; no prior mining or coding experience needed.</h4>
                                <h4 className='fw-bold'><b className='text-white'>Requirements:</b> Enthusiasm to learn blockchain mining—laptops and software provided by IBT!</h4>
                            </div>

                            <div className='spacer-50' />
                        </Col>

                        <Col xl="12" lg="12" md="12" className='scroll-anime bottom'>
                            <h3><span className='box-span' /> 2-Week <span>Roadmap: What You'll Learn</span></h3>
                            <div className='spacer-30' />

                            <div className='month-section'>
                                <h3 className='month-title'><span>Week 1:</span> Mining Fundamentals – Understand and Set Up Mining</h3>
                                <p className='month-desc'>Get the basics of blockchain mining and start your hands-on journey.</p>
                                <div className='spacer-20' />

                                <div className='week-section'>
                                    <h4><b className='text-white'>Day 1: Introduction to Blockchain and Mining</b></h4>
                                    <ul className='dot-list'>
                                        <li>What is blockchain? Its role in Pakistan (e.g., crypto trading, remittances).</li>
                                        <li>What is mining? How it secures networks like Bitcoin and Ethereum.</li>
                                        <li>Overview of consensus: Proof of Work (PoW) vs. Proof of Stake (PoS).</li>
                                        <li><b className='text-white'>Practice:</b> Explore a blockchain explorer to view mined blocks.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Day 2: Mining Hardware and Software</b></h4>
                                    <ul className='dot-list'>
                                        <li>Mining hardware: CPUs, GPUs, and ASICs (pros, cons, and costs).</li>
                                        <li>Mining software: CGMiner, BFGMiner, and wallet setup (e.g., MetaMask).</li>
                                        <li>Set up a mining environment on IBT's computers.</li>
                                        <li><b className='text-white'>Practice:</b> Install and configure mining software on a test system.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Day 3: Proof of Work (PoW) Mining</b></h4>
                                    <ul className='dot-list'>
                                        <li>Deep dive into PoW: Hashing, difficulty, and block rewards.</li>
                                        <li>Understand mining pools vs. solo mining.</li>
                                        <li><b className='text-white'>Practice:</b> Join a testnet mining pool and simulate mining.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Day 4: Economics of Mining</b></h4>
                                    <ul className='dot-list'>
                                        <li>Mining costs: Electricity, hardware, and profitability in Pakistan.</li>
                                        <li>Calculate ROI for mining setups considering local electricity rates.</li>
                                        <li><b className='text-white'>Practice:</b> Use a mining profitability calculator to analyze Bitcoin mining.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Day 5: Hands-On Mining Setup</b></h4>
                                    <ul className='dot-list'>
                                        <li>Set up a virtual mining rig using open-source software.</li>
                                        <li>Simulate mining Bitcoin or Ethereum on a testnet.</li>
                                        <li><b className='text-white'>Mini-project:</b> Configure a GPU miner and track its hash rate.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className='month-section'>
                                <h3 className='month-title'><span>Week 2:</span> Advanced Mining and Staking – Build Modern Skills</h3>
                                <p className='month-desc'>Explore advanced mining techniques and staking for next-gen blockchains.</p>
                                <div className='spacer-20' />

                                <div className='week-section'>
                                    <h4><b className='text-white'>Day 6: Mining Pools and Optimization</b></h4>
                                    <ul className='dot-list'>
                                        <li>How mining pools work: Slush Pool, F2Pool, etc.</li>
                                        <li>Optimize mining for efficiency (e.g., overclocking, cooling).</li>
                                        <li><b className='text-white'>Practice:</b> Join a mining pool simulation and monitor rewards.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Day 7: Proof of Stake (PoS) and Staking</b></h4>
                                    <ul className='dot-list'>
                                        <li>Intro to PoS: How it differs from PoW and is used by networks like Solana.</li>
                                        <li>Set up staking on a testnet (e.g., Solana Devnet).</li>
                                        <li><b className='text-white'>Practice:</b> Stake tokens using a wallet like Phantom.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Day 8: Blockchain Mining Security</b></h4>
                                    <ul className='dot-list'>
                                        <li>Common risks: 51% attacks, double-spending, and pool centralization.</li>
                                        <li>Secure your mining setup with proper wallet and network protection.</li>
                                        <li><b className='text-white'>Practice:</b> Simulate a secure wallet setup for mining rewards.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Day 9: Mining in Pakistan and Beyond</b></h4>
                                    <ul className='dot-list'>
                                        <li>Challenges in Pakistan: High electricity costs, hardware availability.</li>
                                        <li>Opportunities: Staking, cloud mining, and local crypto projects.</li>
                                        <li><b className='text-white'>Mini-project:</b> Design a low-cost staking setup for Solana for a Pakistani startup.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Day 10: Final Project & Showcase</b></h4>
                                    <ul className='dot-list'>
                                        <li>Simulate a Bitcoin mining rig and calculate profitability for a local setup.</li>
                                        <li>Set up a staking node on Solana Devnet for a decentralized app.</li>
                                        <li>Create a mining dashboard to track hash rate and rewards.</li>
                                    </ul>
                                    <p><b className='text-white'>Present your project to the class and earn your IBT Blockchain Mining certificate!</b></p>
                                </div>
                            </div>
                            <div className='spacer-40' />
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
