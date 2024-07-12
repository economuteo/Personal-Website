import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/HireMe";

const HireMe = () => {
    const handleLinkClick = () => {
        window.scrollTo(0, 0); // Scroll to top
    };

    return (
        <Wrapper className="hireButton">
            <Link to="/contact" onClick={handleLinkClick}>
                Hire me
            </Link>
        </Wrapper>
    );
};

export default HireMe;
