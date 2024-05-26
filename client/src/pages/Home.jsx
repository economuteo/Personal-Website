import Wrapper from "../assets/wrappers/Home";
import Profile from "../assets/images/profilePhoto.jpg";
import { HireMe, DownloadCV, Stats, Logos } from "../components";
import Splash from "../assets/images/splash.svg";

const Home = () => {
    return (
        <Wrapper className="container">
            <div className="introduction">
                <div className="special0">
                    <p className="special1">Hi! I am</p>
                    <p className="special2">Teo Economu</p>
                </div>
                <div className="special3">
                    <p>Full-Stack </p>
                    <p>Developer</p>
                </div>
                <div className="splash-container">
                    <img src={Splash} alt="Splash" className="splashImage" />
                </div>
            </div>
            <div className="image-grid-child">
                <div className="imageContainer">
                    <img src={Profile} alt="Profile photo" />
                </div>
            </div>
            <div className="others">
                <Stats />
                <span className="buttons">
                    <HireMe />
                    <DownloadCV />
                </span>
                <span className="logosExtraStyle">
                    <Logos />
                </span>
            </div>
        </Wrapper>
    );
};

export default Home;
