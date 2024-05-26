import Logo from "./Logo";
import Wrapper from "../assets/wrappers/Navbar";
import { AlignLeftIcon, HireMe, NavContent } from "../components";
import { useWindowWidth } from "../customHooks";

const Navbar = () => {
    return (
        <Wrapper className="container">
            <span className="align-icon">
                <AlignLeftIcon />
            </span>
            <div className="logo">
                <Logo />
            </div>
            <div className="nav-content">
                <NavContent />
            </div>
            <HireMe />
        </Wrapper>
    );
};

export default Navbar;
