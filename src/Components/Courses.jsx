import React from "react";
import { Image } from "react-bootstrap";
import { Viewdetailslink } from "./Buttons";
import iconai from "../Assets/Imags/Icons/icon-ai.png";
import ai from "../Assets/Imags/Courses/ai.png";
import iconpython from "../Assets/Imags/Icons/icon-python.png";
import python from "../Assets/Imags/Courses/python.png";
import iconblockchain from "../Assets/Imags/Icons/icon-blockchain.png";
import blockchain from "../Assets/Imags/Courses/blockchain.png";
import iconmining from "../Assets/Imags/Icons/icon-mining.png";
import mining from "../Assets/Imags/Courses/mining.png";
// Reuse existing assets for the MERN course
import arrow from "../Assets/Imags/Icons/icon-arrow.svg";
import { Link } from "react-router-dom";

const courseData = [
    {
        title: "Artificial Intelligence ",
        subtitle: "Course",
        desc: "Master AI from scratch! Build smart systems, analyze data, and create projects like chatbots or image recognizers. Perfect for students, job seekers, and professionals.",
        icon: iconai,
        image: ai,
        alt: "Ai Courses",
        link: "/AiCourses"
    },
    {
        title: "Python ",
        subtitle: "Course",
        desc: "Master Python from zero to hero! Build real-world applications, automate tasks, and create projects like billing systems or web apps. No coding experience required.",
        icon: iconpython,
        image: python,
        alt: "Python Courses",
        link: "/PythonCourses"
    },
    {
        title: "MERN Stack",
        subtitle: "Course",
        desc: "Become a full stack developer with MongoDB, Express.js, React, and Node.js. Build web apps like online stores or job boards.",
        icon: iconai,
        image: blockchain,
        alt: "MERN Stack",
        link: "/MernStack"
    },
    {
        title: "Blockchain",
        subtitle: "Course",
        desc: "Master blockchain technology from scratch! Build decentralized applications, create tokens, and explore trending concepts like NFTs and DeFi.",
        icon: iconblockchain,
        image: blockchain,
        alt: "Blockchain",
        link: "/BlockchainCourses"
    },
    {
        title: "Blockchain",
        subtitle: "Mining Workshop",
        desc: "Master blockchain mining in just 2 weeks! Learn hardware setup, join pools, and explore staking.",
        icon: iconmining,
        image: mining,
        alt: "Mining",
        link: "/MiningWorkshop"
    }
];

function CoursesPost() {
    return (
        <>
            {courseData.map((course, i) => (
                <div className="courses-post scroll-anime" key={i}>
                    <div className="txt-pnl">
                        <div className="icon-span">
                            <Image src={course.icon} alt={course.alt} />
                        </div>
                        <h3><span>{course.title}</span>  {course.subtitle}</h3>
                        <p>{course.desc}</p>
                        <Link className="simple-link" to={course.link}>
                            View Details <Image src={arrow} alt="Arrow" />
                        </Link>
                    </div>
                    <div className="img-pnl">
                        <Image src={course.image} alt={course.alt} />
                    </div>
                </div>
            ))}
        </>
    );
}

export default CoursesPost;