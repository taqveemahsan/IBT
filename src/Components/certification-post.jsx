import React from "react";
import { Viewcourselink } from "./Buttons";
import post1 from "../Assets/Imags/Courses/post-1.png";
import post2 from "../Assets/Imags/Courses/post-2.png";
import post3 from "../Assets/Imags/Courses/post-3.png";
import post4 from "../Assets/Imags/Courses/post-4.png";
import { Image } from "react-bootstrap";

const posts = [
    {
        title: "From learning to earning—make your mark",
        text: "We partner with startups and companies in tech to provide internship placements to top-performing learners. Build experience, sharpen your skills, and get a real taste of the industry before you even graduate.",
        img: post1,
        alt: "industrial training"
    },
    {
        title: "IBT Learners Grow Their Career. You Can Too.",
        text: "Every day, IBT learners are leveling up their lives. From switching careers to landing dream jobs in tech, our alumni are real proof that growth isn’t just possible—it’s inevitable. You bring ambition, we’ll bring the path.",
        img: post2,
        alt: "microsoft certification"
    },
    {
        title: "IT User Support Specialist Career Path",
        text: "Take your tech support skills to the next level and position yourself as a valuable asset in today’s fast-paced IT support environment. This comprehensive training series is designed to help you master troubleshooting, customer service, system maintenance, and real-world problem-solving. Whether you're starting out or looking to upgrade your expertise, you’ll gain the practical knowledge and confidence needed to thrive as a dependable member of dynamic IT support teams.",
        img: post3,
        alt: "MACHINE LEARNING"
    },
    {
        title: "Multi-Cloud Practitioner Career Path",
        text: "Unlock the power of multi-cloud expertise with our all-in-one training series designed to take you from beginner to advanced across major cloud platforms. Learn and get certified in leading providers like AWS, Microsoft Azure, and Google Cloud, and gain the skills needed to architect, manage, and optimize cloud environments with confidence. Whether you're starting your cloud journey or expanding your expertise, this program will prepare you to stand out as a multi-cloud professional in today’s rapidly evolving tech landscape.",
        img: post4,
        alt: "Training Series"
    }
];

function Certificationpost() {
    return (
        <>
            {posts.map((post, index) => (
                <div className="certification-post scroll-anime" key={index}>
                    <div className="txt-pnl">
                        <h3>{post.title}</h3>
                        <p>{post.text}</p>
                        <Viewcourselink />
                    </div>
                    <div className="img-pnl">
                        <Image src={post.img} alt={post.alt} />
                    </div>
                </div>
            ))}
        </>
    );
}

export default Certificationpost;
