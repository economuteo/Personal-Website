import Wrapper from "../assets/wrappers/Footer";
import { Logo, NavContent, Logos, OtherContact } from "../components";

const Footer = () => {
    return (
        <Wrapper>
            <div className="footer-content">
                <Logo />
                <NavContent />
                <Logos />
                <OtherContact />
            </div>
            <div className="footer-quote">
                <p>
                    <i>"Quality is the best business plan" ~ Steve Jobs</i>
                </p>
            </div>
        </Wrapper>
    );
};

export default Footer;
