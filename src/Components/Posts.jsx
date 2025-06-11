
import React from "react";
import TalentMarket from "../Assets/Imags/Courses/TalentMarket.png";
import IBTBusiness from "../Assets/Imags/Courses/IBTBusiness.png";
import Curriculum from "../Assets/Imags/Icons/Curriculum.png";
import Instructors from "../Assets/Imags/Icons/Instructors.png";
import Community from "../Assets/Imags/Icons/Community.png";
import { Image } from "react-bootstrap";
import { Learnmorecontacebtns } from "./Buttons";


// Career Post
export const CareerPost = () => (
    <>
        <div className="post-box">
            <div className="post-three career-post scroll-anime left">
                <h1><span>95%</span></h1>
                <p>
                    95% of grads land internships in 4–8 weeks.
                </p>
            </div>
            <div className="post-three career-post scroll-anime bottom">
                <h1><span>8%</span></h1>
                <p>
                    8% get hired within 4–6 weeks.
                </p>
            </div>
            <div className="post-three career-post scroll-anime right">
                <h1><span>4%</span></h1>
                <p>
                    Find employment before graduating
                </p>
            </div>
        </div>
    </>
);
// Career Post

// Why Ibt Post
export const WhyIbtPost = () => (
    <>
        <div className="post-box">
            <div className="post-three why-ibt-post scroll-anime left">
                <Image src={Curriculum} alt="Curriculum" />
                <h3>Career-Aligned <span>Curriculum</span></h3>
                <p>
                    We don’t teach theory for the sake of it. Every course is shaped by industry needs, so you gain the exact skills employers want, right now.
                </p>
            </div>
            <div className="post-three why-ibt-post scroll-anime bottom">
                <Image src={Instructors} alt="Instructors" />
                <h3>Mentors, Not  <span>Just Instructors</span></h3>
                <p>
                    Our instructors are real-world professionals — coders, data analysts, AI engineers — who’ve walked the path you're on. They don’t just teach; they guide.
                </p>
            </div>
            <div className="post-three why-ibt-post scroll-anime right">
                <Image src={Community} alt="Community" />
                <h3>Community <span>that Lifts You</span></h3>
                <p>
                    At IBT, you’re never alone. From Slack groups to peer reviews to 1-on-1 mentorship, we’ve built a support system that’s got your back — from Day 1 to your first offer letter.
                </p>
            </div>
        </div>
    </>
);
// Why Ibt Post

// Easy Step Post
export const EasyStepPost = () => (
    <>
        <div className="post-box">
            <div className="post-three easy-step-post scroll-anime left">
                <div className="nunber-span"><h3>01</h3></div>
                <h3>ENROLL IN <span>A PROGRAM</span></h3>
                <p>
                    Choose your path: AI, Python, or Blockchain.
                </p>
            </div>
            <div className="post-three easy-step-post scroll-anime bottom">
                <div className="nunber-span"><h3>02</h3></div>
                <h3>Talk to <span>Admissions</span></h3>
                <p>
                    Get personalized guidance to map your learning journey.
                </p>
            </div>
            <div className="post-three easy-step-post scroll-anime right">
                <div className="nunber-span"><h3>03</h3></div>
                <h3>START <span>LEARNING</span></h3>
                <p>
                    Dive into hands-on courses and begin building your career from Day 1.
                </p>
            </div>
        </div>
    </>
);
// Easy Step Post

// Scale Post
export const ScalePost = () => (
    <>
        <div className="post-box">
            <div className="post-two scale-post scroll-anime left">
                <Image src={TalentMarket} alt="Talent Market " />
                <h3>Impact on the Global Tech Talent Market</h3>
                <p>
                    IBT is bridging the global tech skills gap by turning ambition into ability—anywhere in the world. We empower learners from underserved regions, career switchers, and remote-first professionals to master in-demand technologies and enter the global talent pool. IBT is fueling a new wave of agile, cross-border tech talent ready to lead the future.
                </p>
                <Learnmorecontacebtns />
            </div>
            <div className="post-two scale-post scroll-anime right">
                <Image src={IBTBusiness} alt="IBT for Business" />
                <h3>IBT for Business</h3>
                <p>
                    IBT delivers job-ready tech talent that drives real business outcomes. Our graduates bring hands-on experience, reduce onboarding time, and contribute from Day 1. From startups to scale-ups, companies gain access to skilled professionals in AI, blockchain, and Python—trained through real-world challenges, not just theory.
                </p>
                <Learnmorecontacebtns />
            </div>
        </div>
    </>
);
// Scale Post
