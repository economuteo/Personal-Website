import { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/Services";
import PeopleLogo from "../assets/images/services/peopleLogo.svg";
import { Link } from "react-router-dom";

const Services = () => {
    const [isRotated, setIsRotated] = useState([false, false, false, false]);
    const [supportsHover, setSupportsHover] = useState(false);

    useEffect(() => {
        if (window.matchMedia("(hover: hover)").matches) {
            setSupportsHover(true);
        }
    }, []);

    const handleCardClick = (index) => {
        if (!supportsHover) {
            setIsRotated((prevState) => {
                const newState = [...prevState];
                newState[index] = !newState[index];
                return newState;
            });
        }
    };

    return (
        <Wrapper className="container">
            <div className="row1">
                <div className="introduction">
                    <p className="services-introduction-title">Services</p>
                    <p className="services-introduction-description">
                        In this section you will find my current services! Feel free to ask any
                        questions and uncertainties.
                    </p>
                </div>
            </div>
            <div className="row2">
                <div className="services-grid">
                    <div className="card">
                        <div
                            className={`cardContainer ${isRotated[0] ? "rotated" : ""}`}
                            onClick={() => handleCardClick(0)}>
                            <div className="card-front">
                                <div className="image-container">
                                    <img src={PeopleLogo} />
                                </div>
                                <p className="service-role">
                                    <span>Full-Stack</span>
                                    <span>Developer</span>
                                </p>
                            </div>
                            <div className="card-back">
                                <p className="service-description">
                                    Integrating front-end elegance with back-end robustness to
                                    seamlessly bring your project vision to life, ensuring quality
                                    at every stage of development.
                                </p>
                                <Link to="/contact" className="service-description-contactOption">
                                    Contact me
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div
                            className={`cardContainer ${isRotated[1] ? "rotated" : ""}`}
                            onClick={() => handleCardClick(1)}>
                            <div className="card-front">
                                <div className="image-container">
                                    <img src={PeopleLogo} />
                                </div>
                                <span className="service-role">
                                    <span>Front-End</span>
                                    <span>Developer</span>
                                </span>
                            </div>
                            <div className="card-back">
                                <p className="service-description">
                                    Transforming your vision into captivating digital realities, one
                                    pixel at a time.
                                </p>
                                <Link to="/contact" className="service-description-contactOption">
                                    Contact me
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div
                            className={`cardContainer ${isRotated[2] ? "rotated" : ""}`}
                            onClick={() => handleCardClick(2)}>
                            <div className="card-front">
                                <div className="image-container">
                                    <img src={PeopleLogo} />
                                </div>
                                <p className="service-role">
                                    <span>Custom</span>
                                    <span>Website</span>
                                </p>
                            </div>
                            <div className="card-back">
                                <p className="service-description">
                                    Crafting for you a Full-Stack application based on MongoDB,
                                    Express, React and Node tech stack.
                                </p>
                                <Link to="/contact" className="service-description-contactOption">
                                    Contact me
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div
                            className={`cardContainer ${isRotated[3] ? "rotated" : ""}`}
                            onClick={() => handleCardClick(3)}>
                            <div className="card-front">
                                <div className="image-container">
                                    <img src={PeopleLogo} />
                                </div>
                                <p className="service-role">
                                    <span>Back-End</span>
                                    <span>Developer</span>
                                </p>
                            </div>
                            <div className="card-back">
                                <p className="service-description">
                                    Crafting the backbone of your project with precision and
                                    reliability, ensuring seamless quality integration into your
                                    existing plans or ongoing work.
                                </p>
                                <Link to="/contact" className="service-description-contactOption">
                                    Contact me
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Services;
