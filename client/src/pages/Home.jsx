import Wrapper from "../assets/wrappers/Home";
import Profile from "../assets/images/profilePhoto.jpg";
import { HireMe, DownloadCV, Stats, Logos } from "../components";
import Splash from "../assets/images/splash.svg";

const Home = () => {
    return (
        <Wrapper className="container">
            <img src={Splash} alt="Splash" className="splashImage" />
            <div className="introduction-mobileScreens">
                <p className="special1">Hi! I am</p>
                <p className="special2">Teo Economu</p>
                <div className="special3">
                    <p>Full-Stack </p>
                    <p>Developer</p>
                </div>
            </div>
            <div className="others-mobileScreens">
                <div className="logosExtraStyle">
                    <Logos />
                </div>
                <div className="buttons">
                    <HireMe />
                    <DownloadCV />
                </div>
                <Stats />
            </div>
            <div className="image-grid-child">
                <div className="imageContainer">
                    <img src={Profile} alt="Profile photo" />
                </div>
            </div>
        </Wrapper>
    );
};

export default Home;
