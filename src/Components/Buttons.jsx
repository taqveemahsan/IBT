import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Coursetalkbtns = () => (
    <>
        <ul className="btn-list">
            <li>
                <Link className="reg-btn" to="/Courses">Go to courses</Link>
            </li>
        </ul>
    </>
);

export const Learnmorecontacebtns = () => (
    <>
        <ul className="btn-list center">
            <li>
                <Button className="reg-btn">Learn More</Button>
            </li>
            <li>
                <Button className="reg-btn trans white">Contact Us</Button>
            </li>
        </ul>
    </>
);


export const Viewcourselink = () => (
    <>
        <Link className="reg-btn" to="/Courses">View Course</Link>
    </>
);


export const ApplyNowButton = () => (
    <>
        <Button className="reg-btn big" to="/">Apply Now</Button>
    </>
);

export const ViewallButton = () => (
    <>
        <Button className="reg-btn big" to="/">View All</Button>
    </>
);