import Wrapper from "../assets/wrappers/Home";
import InstagramLogo from "../assets/images/home/instagram.svg";
import Github from "../assets/images/home/github.svg";
import LinkedIn from "../assets/images/home/linkedIn.svg";
import Profile from "../assets/images/home/profile.svg";
import { HireMe, DownloadCV, Stats } from "../components";

const Home = () => {
    return (
        <Wrapper className="container">
            <div className="column1">
                <p className="special1">Hi I am </p>
                <p className="special2">Teo Economu</p>
                <div className="special3">
                    <p>Full-Stack </p>
                    <p>Developer</p>
                </div>
                <div className="logos">
                    <img src={InstagramLogo} alt="Instagram" />
                    <img src={Github} alt="Github" />
                    <img src={LinkedIn} alt="LinkedIn" />
                </div>
                <div className="buttons">
                    <HireMe />
                    <DownloadCV />
                </div>
                <Stats />
            </div>
            <div className="column2">
                <img src={Profile} alt="Profile photo" />
            </div>
        </Wrapper>
    );
};

export default Home;
