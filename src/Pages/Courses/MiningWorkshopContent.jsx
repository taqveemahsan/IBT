import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function MiningWorkshopContent() {
    return (
        <Container>
            <Row>
                <Col xl="12" lg="12" md="12" className='scroll-anime bottom'>
                    <div className='course-content-wrapper'>
                        <div className='course-overview'>
                            <h3>Blockchain <span>Mining Workshop</span></h3>
                            <p className='course-description'>
                                Whether you're a student, professional, or enthusiast, this intensive 2-week onsite workshop teaches blockchain mining from scratch. Discover how mining powers networks like Bitcoin and Ethereum, set up your own rig, and explore staking for modern chains like Solana. Join IBT to boost your career in Pakistan's growing blockchain ecosystem!
                            </p>
                        </div>

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
                        <h3><span className='box-span' /> What You'll <span>Gain</span></h3>
                        <div className='spacer-20' />
                        <ul className='dot-list'>
                            <li><b className='text-white'>Skills:</b> Master mining tools like CGMiner, wallet setup, and staking on Solana.</li>
                            <li><b className='text-white'>Projects:</b> A portfolio of 1-2 mining/staking projects to impress employers or clients.</li>
                            <li><b className='text-white'>Career Paths:</b> Freelance as a blockchain consultant, join crypto startups, or manage mining operations.</li>
                            <li><b className='text-white'>Community:</b> Join IBT's student network for support and job leads in Pakistan.</li>
                        </ul>

                        <div className='spacer-40' />
                        <h3><span className='box-span' /> Why Choose <span>IBT?</span></h3>
                        <div className='spacer-20' />
                        <ul className='dot-list'>
                            <li><b className='text-white'>Local Focus:</b> Projects tailored for Pakistani crypto enthusiasts (fintech, startups).</li>
                            <li><b className='text-white'>Expert Instructors:</b> Learn from blockchain pros in Urdu/English for easy understanding.</li>
                            <li><b className='text-white'>Hands-On Labs:</b> Use IBT's computers to experiment with mining and staking.</li>
                            <li><b className='text-white'>Affordable Fees:</b> Budget-friendly for Pakistani students (contact IBT for details).</li>
                            <li><b className='text-white'>Job Support:</b> Guidance on freelancing and blockchain jobs in Pakistan and abroad.</li>
                        </ul>

                        <div className='spacer-50' />
                        <div className='course-cta'>
                            <div className='border-box-pnl'>
                                <h3>Ready to Shape the Future <span>with Blockchain Mining?</span></h3>
                                <div className='spacer-20' />
                                <h4 className='fw-bold'>Join IBT's Blockchain Mining Workshop and become a mining expert in just 2 weeks! 🚀</h4>
                                <div className='spacer-20' />
                                <p><b className='text-white'>How to Join:</b> Visit IBT Institute to register or learn more.</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default MiningWorkshopContent;