import Logo from "./Logo";
import Wrapper from "../assets/wrappers/Navbar";
import { NavLink } from "react-router-dom";
import { AlignLeftIcon, HireMe } from "../components";

const Navbar = () => {
    return (
        <Wrapper className="container">
            <AlignLeftIcon />
            <Logo />
            <span className="navul">
                <span className="navul">
                    <NavLink to="/" className={(navData) => (navData.isActive ? "active" : null)}>
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={(navData) => (navData.isActive ? "active" : null)}>
                        About me
                    </NavLink>
                    <NavLink
                        to="/services"
                        className={(navData) => (navData.isActive ? "active" : null)}>
                        Services
                    </NavLink>
                    <NavLink
                        to="/portofolio"
                        className={(navData) => (navData.isActive ? "active" : null)}>
                        Portofolio
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={(navData) => (navData.isActive ? "active" : null)}>
                        Contact me
                    </NavLink>
                </span>
            </span>
            <HireMe />
        </Wrapper>
    );
};

export default Navbar;
