import Wrapper from "../assets/wrappers/Logos";
import InstagramLogo from "../assets/images/home/instagram.svg";
import Github from "../assets/images/home/github.svg";
import LinkedIn from "../assets/images/home/linkedIn.svg";

const Logos = () => {
    return (
        <Wrapper>
            <a
                href="https://www.instagram.com/teoeconomu/"
                target="_blank"
                rel="noopener noreferrer">
                <img src={InstagramLogo} alt="Instagram" />
            </a>
            <a href="https://github.com/economuteo" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt="Github" />
            </a>
            <a
                href="https://www.linkedin.com/in/teoantonioeconomu/"
                target="_blank"
                rel="noopener noreferrer">
                <img src={LinkedIn} alt="LinkedIn" />
            </a>
        </Wrapper>
    );
};

export default Logos;
