import React from "react";
import { Image } from "react-bootstrap";
import iconcoma from "../Assets/Imags/Icons/icon-coma.png";
import user from "../Assets/Imags/Icons/user.png";
import { StarList } from "./Lists";
function StoriesPosts() {
    return (
        <>
            <div className="post-box">
                <div className="post-three scroll-anime left">
                    <div className="story-post">
                        <Image src={iconcoma} alt="Coma" />
                        <p>Enrolling in IBT Learning was the best decision I made for my career. I had no prior tech background, but the program was designed in a way that even complete beginners like me could follow and grow. The instructors were super supportive, and the real-world projects helped me build a solid portfolio. Within 6 weeks of graduating, I landed an internship at a growing startup, and now I’m working full-time as a junior developer. It truly changed my life!</p>
                        <div className="spacer-20" />
                        <div className="flex-div-sm">
                            <div className="user-pnl">
                                <div><Image src={user} alt="user" /></div>
                                <div>
                                    <h6>Mohammed S.</h6>
                                    <p>Junior Web Developer</p>
                                </div>
                            </div>
                            <StarList />
                        </div>
                    </div>
                    <div className="story-post">
                        <Image src={iconcoma} alt="Coma" />
                        <p>IBT Learning helped me land my first tech job within two months of graduating. The curriculum is hands-on and the support is incredible.</p>
                        <div className="spacer-20" />
                        <div className="flex-div-sm">
                            <div className="user-pnl">
                                <div><Image src={user} alt="user" /></div>
                                <div>
                                    <h6>Mohammed S.</h6>
                                    <p>Junior Web Developer</p>
                                </div>
                            </div>
                            <StarList />
                        </div>
                    </div>
                </div>
                <div className="post-three  scroll-anime bottom">
                    <div className="story-post">
                        <Image src={iconcoma} alt="Coma" />
                        <p>IBT Learning helped me land my first tech job within two months of graduating. The curriculum is hands-on and the support is incredible.</p>
                        <div className="spacer-20" />
                        <div className="flex-div-sm">
                            <div className="user-pnl">
                                <div><Image src={user} alt="user" /></div>
                                <div>
                                    <h6>Mohammed S.</h6>
                                    <p>Junior Web Developer</p>
                                </div>
                            </div>
                            <StarList />
                        </div>
                    </div>
                    <div className="story-post">
                        <Image src={iconcoma} alt="Coma" />
                        <p>Enrolling in IBT Learning was the best decision I made for my career. I had no prior tech background, but the program was designed in a way that even complete beginners like me could follow and grow. The instructors were super supportive, and the real-world projects helped me build a solid portfolio. Within 6 weeks of graduating, I landed an internship at a growing startup, and now I’m working full-time as a junior developer. It truly changed my life!</p>
                        <div className="spacer-20" />
                        <div className="flex-div-sm">
                            <div className="user-pnl">
                                <div><Image src={user} alt="user" /></div>
                                <div>
                                    <h6>Mohammed S.</h6>
                                    <p>Junior Web Developer</p>
                                </div>
                            </div>
                            <StarList />
                        </div>
                    </div>

                </div>
                <div className="post-three  scroll-anime right">
                    <div className="story-post">
                        <Image src={iconcoma} alt="Coma" />
                        <p>Enrolling in IBT Learning was the best decision I made for my career. I had no prior tech background, but the program was designed in a way that even complete beginners like me could follow and grow. The instructors were super supportive, and the real-world projects helped me build a solid portfolio. Within 6 weeks of graduating, I landed an internship at a growing startup, and now I’m working full-time as a junior developer. It truly changed my life!</p>
                        <div className="spacer-20" />
                        <div className="flex-div-sm">
                            <div className="user-pnl">
                                <div><Image src={user} alt="user" /></div>
                                <div>
                                    <h6>Mohammed S.</h6>
                                    <p>Junior Web Developer</p>
                                </div>
                            </div>
                            <StarList />
                        </div>
                    </div>
                    <div className="story-post">
                        <Image src={iconcoma} alt="Coma" />
                        <p>IBT Learning helped me land my first tech job within two months of graduating. The curriculum is hands-on and the support is incredible.</p>
                        <div className="spacer-20" />
                        <div className="flex-div-sm">
                            <div className="user-pnl">
                                <div><Image src={user} alt="user" /></div>
                                <div>
                                    <h6>Mohammed S.</h6>
                                    <p>Junior Web Developer</p>
                                </div>
                            </div>
                            <StarList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StoriesPosts;