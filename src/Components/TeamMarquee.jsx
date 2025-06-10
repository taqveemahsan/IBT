import React from "react";
import { Image } from "react-bootstrap";
import Partner1 from "../Assets/Imags/Partners/Partner-1.png";
import Partner2 from "../Assets/Imags/Partners/Partner-2.png";
import Partner3 from "../Assets/Imags/Partners/Partner-3.png";
import Partner4 from "../Assets/Imags/Partners/Partner-4.png";
import Partner5 from "../Assets/Imags/Partners/Partner-5.png";
function TeamMarquee() {
    return (
        <>
            <div className="marquee-container-main scroll-anime">
                <div className="marquee-container scroll-anime">
                    <div className="marquee-container-inner">
                        <ul className="team-marquee">
                            <li><Image src={Partner1} alt="Partner1" /></li>
                            <li><Image src={Partner2} alt="Partner2" /></li>
                            <li><Image src={Partner3} alt="Partner3" /></li>
                            <li><Image src={Partner4} alt="Partner4" /></li>
                            <li><Image src={Partner5} alt="Partner5" /></li>
                            <li><Image src={Partner1} alt="Partner1" /></li>
                            <li><Image src={Partner2} alt="Partner2" /></li>
                            <li><Image src={Partner3} alt="Partner3" /></li>
                            <li><Image src={Partner4} alt="Partner4" /></li>
                            <li><Image src={Partner5} alt="Partner5" /></li>
                            <li><Image src={Partner1} alt="Partner1" /></li>
                            <li><Image src={Partner2} alt="Partner2" /></li>
                            <li><Image src={Partner3} alt="Partner3" /></li>
                            <li><Image src={Partner4} alt="Partner4" /></li>
                            <li><Image src={Partner5} alt="Partner5" /></li>
                            <li><Image src={Partner1} alt="Partner1" /></li>
                            <li><Image src={Partner2} alt="Partner2" /></li>
                            <li><Image src={Partner3} alt="Partner3" /></li>
                            <li><Image src={Partner4} alt="Partner4" /></li>
                            <li><Image src={Partner5} alt="Partner5" /></li>
                            <li><Image src={Partner1} alt="Partner1" /></li>
                            <li><Image src={Partner2} alt="Partner2" /></li>
                            <li><Image src={Partner3} alt="Partner3" /></li>
                            <li><Image src={Partner4} alt="Partner4" /></li>
                            <li><Image src={Partner5} alt="Partner5" /></li>
                            <li><Image src={Partner1} alt="Partner1" /></li>
                            <li><Image src={Partner2} alt="Partner2" /></li>
                            <li><Image src={Partner3} alt="Partner3" /></li>
                            <li><Image src={Partner4} alt="Partner4" /></li>
                            <li><Image src={Partner5} alt="Partner5" /></li>
                            <li><Image src={Partner1} alt="Partner1" /></li>
                            <li><Image src={Partner2} alt="Partner2" /></li>
                            <li><Image src={Partner3} alt="Partner3" /></li>
                            <li><Image src={Partner4} alt="Partner4" /></li>
                            <li><Image src={Partner5} alt="Partner5" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TeamMarquee;