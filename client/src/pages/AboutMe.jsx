import Wrapper from "../assets/wrappers/About";
import ProfilePhoto from "../assets/images/profilePhoto.jpg";
import Javascript from "../assets/images/about/javascript.png";
import MongoDB from "../assets/images/about/mongodb_logo.png";
import Express from "../assets/images/about/express.png";
import React from "../assets/images/about/react.png";
import Redux from "../assets/images/about/redux.png";
import NodeJs from "../assets/images/about/nodeJs.png";
import DownloadLogo from "../assets/images/about/downloadLogo.svg";
import Resume from "../assets/cv/Resume.pdf";

const AboutMe = () => {
    return (
        <Wrapper className="container">
            <div className="introduction">
                <p className="special1">About Me</p>
                <p className="special2"> Full Stack Developer </p>
            </div>
            <div className="about-section">
                <img className="profile-img" src={ProfilePhoto} alt="Me" />
                <div className="description">
                    <p className="short-description">
                        My journey in web development is driven by a profound passion to create and
                        innovate, constantly exploring new methodologies and technologies to build
                        websites that are both aesthetically pleasing and functionally superior,
                        enhancing user engagement and satisfaction. I have experience with HTML,
                        CSS, JavaScript, React, Node.js, Express.js, MongoDB and other modern web
                        technologies. I can adapt on any tech stack in a short time and I am always
                        eager to consistently deliver unmatched quality.
                    </p>
                    <a href={Resume} download>
                        <div className="special-download-button">
                            <img src={DownloadLogo} />
                            <span className="special-button">Download CV</span>
                        </div>
                    </a>
                </div>
            </div>
            <div className="tech-stack">
                <div className="tech-container">
                    <img src={Javascript} alt="" />
                    <span>Javascript</span>
                </div>
                <div className="tech-container">
                    <img src={MongoDB} alt="" />
                    <span>MongoDB</span>
                </div>
                <div className="tech-container">
                    <img src={Express} alt="" />
                    <span>Express</span>
                </div>
                <div className="tech-container">
                    <img src={React} alt="" />
                    <span>React</span>
                </div>
                <div className="tech-container">
                    <img src={Redux} alt="" />
                    <span>Redux</span>
                </div>
                <div className="tech-container">
                    <img src={NodeJs} alt="" />
                    <span>NodeJs</span>
                </div>
            </div>
        </Wrapper>
    );
};

export default AboutMe;
