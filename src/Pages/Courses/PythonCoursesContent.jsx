import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function PythonCoursesContent() {
    return (
        <Container>
            <Row>
                <Col xl="12" lg="12" md="12" className='scroll-anime bottom'>
                    <div className='course-content-wrapper'>
                        <div className='course-overview'>
                            <h3>IBT 3-Month <span>Python Course</span></h3>
                            <p className='course-description'>
                                Whether you're a student, job seeker, or professional, this course is designed for everyone to master Python from scratch. Learn to build real-world applications, automate tasks, and create projects like billing systems or web apps used in Pakistan and beyond. Join IBT to become a Python expert and boost your career!
                            </p>
                        </div>

                        <h3><span className='box-span' /> 3-Month <span>Roadmap: What You'll Learn</span></h3>
                        <div className='spacer-30' />

                        {/* Month 1 */}
                        <div className='month-section'>
                            <h3 className='month-title'><span>Month 1:</span> Python Foundations – Start Your Coding Journey</h3>
                            <p className='month-desc'>Build a strong base in Python programming with practical exercises.</p>
                            <div className='spacer-20' />

                            <div className='week-section'>
                                <h4><b className='text-white'>Week 1: Introduction to Python</b></h4>
                                <ul className='dot-list'>
                                    <li>What is Python? Its role in Pakistan (e.g., startups, freelancing, automation).</li>
                                    <li>Why Python? Uses in web development, data analysis, and automation.</li>
                                    <li>Set up Python, VS Code, and Thonny (lightweight IDE for beginners).</li>
                                    <li><b className='text-white'>Practice:</b> Write a simple Python program to print a greeting or calculate a bill.</li>
                                </ul>
                            </div>

                            <div className='week-section'>
                                <h4><b className='text-white'>Week 2: Python Basics</b></h4>
                                <ul className='dot-list'>
                                    <li>Variables, data types (int, string, float), and operators.</li>
                                    <li>Input/output and basic string manipulation.</li>
                                    <li><b className='text-white'>Practice:</b> Create a program to calculate a shop's total sales based on user input.</li>
                                </ul>
                            </div>

                            <div className='week-section'>
                                <h4><b className='text-white'>Week 3: Control Structures</b></h4>
                                <ul className='dot-list'>
                                    <li>Conditionals (if-else statements) and loops (for, while).</li>
                                    <li>Handle basic logic (e.g., check if a customer qualifies for a discount).</li>
                                    <li><b className='text-white'>Mini-project:</b> Build a grade calculator for students based on marks.</li>
                                </ul>
                            </div>

                            <div className='week-section'>
                                <h4><b className='text-white'>Week 4: Lists and Dictionaries</b></h4>
                                <ul className='dot-list'>
                                    <li>Work with lists, tuples, and dictionaries.</li>
                                    <li>Basic data organization (e.g., store customer names and purchases).</li>
                                    <li><b className='text-white'>Practice:</b> Create a program to manage a small inventory for a Karachi store.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Month 2 */}
                        <div className='month-section'>
                            <h3 className='month-title'><span>Month 2:</span> Intermediate Python – Build Functional Programs</h3>
                            <p className='month-desc'>Learn to write reusable code and work with real-world applications.</p>
                            <div className='spacer-20' />

                            <div className='week-section'>
                                <h4><b className='text-white'>Week 5: Functions and Modules</b></h4>
                                <ul className='dot-list'>
                                    <li>Define and call functions, use parameters, and return values.</li>
                                    <li>Explore Python modules (e.g., math, random).</li>
                                    <li><b className='text-white'>Practice:</b> Write a function to calculate discounts for a shop's loyalty program.</li>
                                </ul>
                            </div>

                            <div className='week-section'>
                                <h4><b className='text-white'>Week 6: File Handling</b></h4>
                                <ul className='dot-list'>
                                    <li>Read and write files (e.g., save customer data to a file).</li>
                                    <li>Use CSV files for data storage.</li>
                                    <li><b className='text-white'>Mini-project:</b> Build a program to save and retrieve sales records for a local business.</li>
                                </ul>
                            </div>

                            <div className='week-section'>
                                <h4><b className='text-white'>Week 7: Object-Oriented Programming (OOP)</b></h4>
                                <ul className='dot-list'>
                                    <li>Basics of OOP: classes, objects, methods, and inheritance.</li>
                                    <li>Create reusable code for real-world scenarios.</li>
                                    <li><b className='text-white'>Practice:</b> Build a class to manage student records for a school.</li>
                                </ul>
                            </div>

                            <div className='week-section'>
                                <h4><b className='text-white'>Week 8: Error Handling and Libraries</b></h4>
                                <ul className='dot-list'>
                                    <li>Handle errors using try-except blocks.</li>
                                    <li>Use libraries like pandas for data analysis or requests for APIs.</li>
                                    <li><b className='text-white'>Mini-project:</b> Create a program to fetch and display weather data for a Pakistani city.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Month 3 */}
                        <div className='month-section'>
                            <h3 className='month-title'><span>Month 3:</span> Advanced Python & Projects – Become a Python Pro</h3>
                            <p className='month-desc'>Apply Python to real-world problems and build a portfolio.</p>
                            <div className='spacer-20' />

                            <div className='week-section'>
                                <h4><b className='text-white'>Week 9: Working with Databases</b></h4>
                                <ul className='dot-list'>
                                    <li>Intro to databases: Use MongoDB for simple data storage.</li>
                                    <li>Store and retrieve data (e.g., customer orders).</li>
                                    <li><b className='text-white'>Practice:</b> Build a database to track a shop's inventory.</li>
                                </ul>
                            </div>

                            <div className='week-section'>
                                <h4><b className='text-white'>Week 10: Web Development Basics</b></h4>
                                <ul className='dot-list'>
                                    <li>Intro to Flask for building web apps.</li>
                                    <li>Create a simple webpage with Python.</li>
                                    <li><b className='text-white'>Mini-project:</b> Build a web app for a local business to display products.</li>
                                </ul>
                            </div>

                            <div className='week-section'>
                                <h4><b className='text-white'>Week 11: Automation with Python</b></h4>
                                <ul className='dot-list'>
                                    <li>Automate tasks like sending emails or processing files.</li>
                                    <li>Use libraries like pyautogui or smtplib.</li>
                                    <li><b className='text-white'>Practice:</b> Create a script to automate generating sales reports.</li>
                                </ul>
                            </div>

                            <div className='week-section'>
                                <h4><b className='text-white'>Week 12: Final Project & Showcase</b></h4>
                                <p>Build a capstone project (choose one):</p>
                                <ul className='dot-list'>
                                    <li>Billing system for a Pakistani shop (e.g., calculate totals, apply discounts).</li>
                                    <li>Student management system for a local school.</li>
                                    <li>Simple e-commerce website using Flask.</li>
                                    <li>Data analyzer for sales trends using pandas.</li>
                                </ul>
                                <p><b className='text-white'>Present your project to the class and earn your IBT Python certificate!</b></p>
                            </div>
                        </div>

                        <div className='spacer-40' />
                        <h3><span className='box-span' /> What You'll <span>Gain</span></h3>
                        <div className='spacer-20' />
                        <ul className='dot-list'>
                            <li><b className='text-white'>Skills:</b> Master Python tools like pandas, Flask, and SQLite to build practical applications.</li>
                            <li><b className='text-white'>Projects:</b> A portfolio of 3-5 Python projects to impress employers or clients.</li>
                            <li><b className='text-white'>Career Paths:</b> Freelance on Upwork/Fiverr, join tech startups, or pursue roles in web development or data analysis.</li>
                            <li><b className='text-white'>Community:</b> Join IBT's student network for support and job leads in Pakistan.</li>
                        </ul>

                        <div className='spacer-40' />
                        <h3><span className='box-span' /> Why Choose <span>IBT?</span></h3>
                        <div className='spacer-20' />
                        <ul className='dot-list'>
                            <li><b className='text-white'>Local Focus:</b> Projects tailored for Pakistani industries (retail, education, startups).</li>
                            <li><b className='text-white'>Expert Instructors:</b> Learn from Python pros in Urdu/English for easy understanding.</li>
                            <li><b className='text-white'>Hands-On Labs:</b> Use IBT's computers to code and experiment in class.</li>
                            <li><b className='text-white'>Affordable Fees:</b> Budget-friendly for Pakistani students (contact IBT for details).</li>
                            <li><b className='text-white'>Job Support:</b> Guidance on freelancing and tech jobs in Pakistan and abroad.</li>
                        </ul>

                        <div className='spacer-50' />
                        <div className='course-cta'>
                            <div className='border-box-pnl'>
                                <h3>Ready to Code the Future <span>with Python?</span></h3>
                                <div className='spacer-20' />
                                <h4 className='fw-bold'>Join IBT's Python Course and become a Python expert in just 3 months! 🚀</h4>
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

export default PythonCoursesContent;