import Mail from "../assets/images/footer/mail.svg";
import Phone from "../assets/images/footer/phone.svg";
import Wrapper from "../assets/wrappers/OtherContact";

const OtherContact = () => {
    return (
        <Wrapper>
            <div className="mail contact-info">
                <img src={Mail} />
                <a href="mailto:teoantonioeconomu@gmail.com">teoantonioeconomu@gmail.com</a>
            </div>
            <div className="phone contact-info">
                <img src={Phone} />
                <a href="tel:+40773384742">+40773384742</a>
            </div>
        </Wrapper>
    );
};

export default OtherContact;
