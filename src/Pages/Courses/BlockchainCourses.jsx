import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { InnerHeader } from '../../Components/Header';
import heroimg from "../../Assets/Imags/Bg/block-bg.png";
import { Link } from 'react-router-dom';

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
                heading="IBT 3-Month"
                highlight="Blockchain Course"
                description="Whether you're a student, job seeker, or professional, this course is designed for everyone to master blockchain technology from scratch. Learn to build decentralized applications, create tokens, and explore trending concepts like NFTs and DeFi. Join IBT to become a blockchain expert and boost your career in Pakistan and beyond!"
                bgImages={[heroimg]}
            />

            <Container fluid className='inner-page'>
                <Container>
                    <Row>
                        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} className='text-center scroll-anime bottom'>
                            <div className='border-box-pnl'>
                                <h3>Course <span>Overview</span></h3>
                                <div className='spacer-20' />
                                <p>Welcome to IBT's 3-Month Blockchain Course! Whether you're a student, job seeker, or professional, this course is designed for everyone to master blockchain technology from scratch. Learn to build decentralized applications, create tokens, and explore trending concepts like NFTs and DeFi. Join IBT to become a blockchain expert and boost your career in Pakistan and beyond!</p>
                            </div>
                            <div className='spacer-50' />
                        </Col>

                        <Col xl="12" lg="12" md="12" className='scroll-anime bottom'>
                            <h3><span className='box-span' /> Why Join <span>IBT's Blockchain Course?</span></h3>
                            <div className='spacer-20' />
                            <ul className='dot-list'>
                                <li><b className='text-white'>For All Levels:</b> Start with no blockchain knowledge and end with job-ready skills!</li>
                                <li><b className='text-white'>Practical Learning:</b> Build real-world projects like token creation or DeFi apps for Pakistani businesses.</li>
                                <li><b className='text-white'>Onsite Classes:</b> Learn in IBT's classrooms with expert guidance and hands-on labs.</li>
                                <li><b className='text-white'>Career Boost:</b> Blockchain is booming in freelancing, startups, and global tech jobs.</li>
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
                                <h4 className='fw-bold'><b className='text-white'>Who Can Join:</b> Anyone! Students, professionals, or hobbyists. Basic programming knowledge (e.g., Python or JavaScript) is a plus but not required.</h4>
                                <h4 className='fw-bold'><b className='text-white'>Requirements:</b> Just enthusiasm to learn blockchain—no advanced skills needed!</h4>
                            </div>
                            <div className='spacer-50' />
                        </Col>

                        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} className='text-center scroll-anime bottom'>
                            <div className='border-box-pnl'>
                                <h3>Course <span>Description</span></h3>
                                <div className='spacer-20' />
                                <p>This foundational course introduces blockchain technology, covering decentralization, cryptography, consensus algorithms, and smart contracts. Learn the latest blockchain trends, including Layer 2 solutions, NFTs, and DeFi, preparing you for advanced blockchain development and real-world applications in Pakistan's growing tech ecosystem.</p>
                            </div>
                            <div className='spacer-50' />
                        </Col>

                        <Col xl="12" lg="12" md="12" className='scroll-anime bottom'>
                            <h3><span className='box-span' /> 3-Month <span>Roadmap: What You'll Learn</span></h3>
                            <div className='spacer-30' />

                            {/* Month 1 */}
                            <div className='month-section'>
                                <h3 className='month-title'><span>Month 1:</span> Blockchain Foundations – Start Your Decentralized Journey</h3>
                                <p className='month-desc'>Build a strong base in blockchain concepts and programming basics.</p>
                                <div className='spacer-20' />

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 1: Introduction to Blockchain</b></h4>
                                    <ul className='dot-list'>
                                        <li>What is blockchain? Its role in Pakistan (e.g., fintech, supply chain, remittances).</li>
                                        <li>Key concepts: Decentralization, immutability, and distributed ledgers.</li>
                                        <li>Set up tools: Node.js, Truffle, and MetaMask for blockchain development.</li>
                                        <li><b className='text-white'>Practice:</b> Connect MetaMask to a testnet (e.g., Sepolia) and transfer test tokens.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 2: Cryptography and Blockchain Basics</b></h4>
                                    <ul className='dot-list'>
                                        <li>Basics of cryptography: Hashing, public/private keys, and digital signatures.</li>
                                        <li>Explore blockchain networks: Ethereum, Solana, and Binance Smart Chain.</li>
                                        <li><b className='text-white'>Practice:</b> Generate a wallet and sign a transaction using JavaScript.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 3: Smart Contracts with Solidity</b></h4>
                                    <ul className='dot-list'>
                                        <li>Intro to smart contracts: What they are and how they work.</li>
                                        <li>Learn Solidity basics: Variables, functions, and events.</li>
                                        <li><b className='text-white'>Practice:</b> Write a simple smart contract to store user data (e.g., customer IDs).</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 4: Deploying Smart Contracts</b></h4>
                                    <ul className='dot-list'>
                                        <li>Deploy smart contracts on Ethereum testnets using Truffle or Remix.</li>
                                        <li>Interact with contracts using Web3.js.</li>
                                        <li><b className='text-white'>Mini-project:</b> Build a voting system smart contract for a local election scenario.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Month 2 */}
                            <div className='month-section'>
                                <h3 className='month-title'><span>Month 2:</span> Core Blockchain Concepts – Build Decentralized Systems</h3>
                                <p className='month-desc'>Dive into blockchain development and create practical applications.</p>
                                <div className='spacer-20' />

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 5: Consensus Algorithms</b></h4>
                                    <ul className='dot-list'>
                                        <li>Understand consensus: Proof of Work (PoW), Proof of Stake (PoS), and Solana's Proof of History.</li>
                                        <li>Compare Ethereum vs. Solana for speed and cost.</li>
                                        <li><b className='text-white'>Practice:</b> Simulate a PoS consensus model using a Python script.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 6: Decentralized Applications (DApps)</b></h4>
                                    <ul className='dot-list'>
                                        <li>Build a DApp: Connect a frontend (HTML/JavaScript) to a smart contract.</li>
                                        <li>Use Web3.js to interact with Ethereum blockchain.</li>
                                        <li><b className='text-white'>Mini-project:</b> Create a DApp for a Pakistani marketplace to list products.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 7: Tokens and Tokenomics</b></h4>
                                    <ul className='dot-list'>
                                        <li>Learn about ERC-20 and ERC-721 tokens (fungible vs. non-fungible).</li>
                                        <li>Create and deploy your own token on a testnet.</li>
                                        <li><b className='text-white'>Practice:</b> Build an ERC-20 token for a loyalty program (e.g., for a Karachi retailer).</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 8: Intro to DeFi</b></h4>
                                    <ul className='dot-list'>
                                        <li>What is DeFi? Explore lending, borrowing, and decentralized exchanges.</li>
                                        <li>Use tools like Uniswap or Raydium to interact with liquidity pools.</li>
                                        <li><b className='text-white'>Mini-project:</b> Simulate a liquidity pool for a token pair using Solana's Raydium SDK.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Month 3 */}
                            <div className='month-section'>
                                <h3 className='month-title'><span>Month 3:</span> Advanced Blockchain & Projects – Become a Blockchain Pro</h3>
                                <p className='month-desc'>Apply blockchain to real-world problems and build a portfolio.</p>
                                <div className='spacer-20' />

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 9: Non-Fungible Tokens (NFTs)</b></h4>
                                    <ul className='dot-list'>
                                        <li>Intro to NFTs: Creation, minting, and marketplaces.</li>
                                        <li>Use OpenSea testnet to mint an NFT.</li>
                                        <li><b className='text-white'>Practice:</b> Create an NFT collection for a Pakistani artist or brand.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 10: Layer 2 Solutions</b></h4>
                                    <ul className='dot-list'>
                                        <li>Explore Layer 2: Polygon, Arbitrum, and Optimism for faster, cheaper transactions.</li>
                                        <li>Deploy a smart contract on Polygon testnet.</li>
                                        <li><b className='text-white'>Mini-project:</b> Build a payment system using Polygon for a local e-commerce site.</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 11: Blockchain Security and Tools</b></h4>
                                    <ul className='dot-list'>
                                        <li>Learn about common vulnerabilities: Reentrancy, gas optimization.</li>
                                        <li>Use tools like Hardhat for testing smart contracts.</li>
                                        <li><b className='text-white'>Practice:</b> Audit a smart contract for a supply chain use case (e.g., tracking goods).</li>
                                    </ul>
                                </div>

                                <div className='week-section'>
                                    <h4><b className='text-white'>Week 12: Final Project & Showcase</b></h4>
                                    <p>Build a capstone project (choose one):</p>
                                    <ul className='dot-list'>
                                        <li>Token deployment for a Pakistani startup (e.g., loyalty or utility token).</li>
                                        <li>NFT marketplace for local creators (e.g., art or music).</li>
                                        <li>DeFi app for lending/borrowing (e.g., for small businesses).</li>
                                        <li>Supply chain tracker for a local industry (e.g., agriculture).</li>
                                    </ul>
                                    <p><b className='text-white'>Present your project to the class and earn your IBT Blockchain certificate!</b></p>
                                </div>
                            </div>

                            <div className='spacer-40' />
                            <h3><span className='box-span' /> What You'll <span>Gain</span></h3>
                            <div className='spacer-20' />
                            <ul className='dot-list'>
                                <li><b className='text-white'>Skills:</b> Master blockchain tools like Solidity, Web3.js, and Raydium SDK to build decentralized systems.</li>
                                <li><b className='text-white'>Projects:</b> A portfolio of 3-5 blockchain projects to impress employers or clients.</li>
                                <li><b className='text-white'>Career Paths:</b> Freelance on Upwork/Fiverr, join blockchain startups, or pursue roles in DeFi, NFT, or smart contract development.</li>
                                <li><b className='text-white'>Community:</b> Join IBT's student network for support and job leads in Pakistan.</li>
                            </ul>

                            <div className='spacer-40' />
                            <h3><span className='box-span' /> Why Choose <span>IBT?</span></h3>
                            <div className='spacer-20' />
                            <ul className='dot-list'>
                                <li><b className='text-white'>Local Focus:</b> Projects tailored for Pakistani industries (fintech, e-commerce, agriculture).</li>
                                <li><b className='text-white'>Expert Instructors:</b> Learn from blockchain pros in Urdu/English for easy understanding.</li>
                                <li><b className='text-white'>Hands-On Labs:</b> Use IBT's computers to code and experiment in class.</li>
                                <li><b className='text-white'>Affordable Fees:</b> Budget-friendly for Pakistani students (contact IBT for details).</li>
                                <li><b className='text-white'>Job Support:</b> Guidance on freelancing and blockchain jobs in Pakistan and abroad.</li>
                            </ul>

                            <div className='spacer-50' />
                        </Col>

                        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} className='text-center scroll-anime bottom'>
                            <div className='border-box-pnl'>
                                <h3>Ready to Shape the Future <span>with Blockchain?</span></h3>
                                <div className='spacer-20' />
                                <h4 className='fw-bold'>Join IBT's Blockchain Course and become a blockchain expert in just 3 months! 🚀</h4>
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

export default BlockchainCourses;