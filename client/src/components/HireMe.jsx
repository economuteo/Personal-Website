import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/HireMe";

const HireMe = () => {
    return (
        <Wrapper className="hireButton">
            <Link to="/hire">Hire me</Link>
        </Wrapper>
    );
};

export default HireMe;
