import Wrapper from "../assets/wrappers/Footer";
import Mail from "../assets/images/footer/mail.svg";
import Phone from "../assets/images/footer/phone.svg";
import { Logo, NavContent, Logos } from "../components";

const Footer = () => {
    return (
        <Wrapper>
            <div className="footer-content">
                <Logo />
                <div className="nav-content">
                    <NavContent />
                </div>
                <div className="contact">
                    <div className="mail contact-info">
                        <img src={Mail} />
                        <a href="mailto:teoantonioeconomu@gmail.com">teoantonioeconomu@gmail.com</a>
                    </div>
                    <div className="phone contact-info">
                        <img src={Phone} />
                        <a href="tel:+40773384742">+40773384742</a>
                    </div>
                </div>
                <Logos />
            </div>
            <div className="footer-quote">
                <i>"Quality is the best business plan" ~ Steve Jobs</i>
            </div>
        </Wrapper>
    );
};

export default Footer;
