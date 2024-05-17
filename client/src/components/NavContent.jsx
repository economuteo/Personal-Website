import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/NavContent";

const NavContent = () => {
    return (
        <Wrapper>
            <NavLink to="/" className={(navData) => (navData.isActive ? "active" : null)}>
                Home
            </NavLink>
            <NavLink to="/about" className={(navData) => (navData.isActive ? "active" : null)}>
                About me
            </NavLink>
            <NavLink to="/services" className={(navData) => (navData.isActive ? "active" : null)}>
                Services
            </NavLink>
            <NavLink to="/portofolio" className={(navData) => (navData.isActive ? "active" : null)}>
                Portofolio
            </NavLink>
            <NavLink to="/contact" className={(navData) => (navData.isActive ? "active" : null)}>
                Contact me
            </NavLink>
        </Wrapper>
    );
};

export default NavContent;
