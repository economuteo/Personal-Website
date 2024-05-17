import Logo from "./Logo";
import Wrapper from "../assets/wrappers/Navbar";
import { AlignLeftIcon, HireMe, NavContent } from "../components";

const Navbar = () => {
    return (
        <Wrapper className="container">
            <AlignLeftIcon />
            <Logo />
            <NavContent />
            <HireMe />
        </Wrapper>
    );
};

export default Navbar;
