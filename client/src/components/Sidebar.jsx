import React from "react";
import Wrapper from "../assets/wrappers/Sidebar";
import { NavLink } from "react-router-dom";

const Sidebar = ({ sidebar, sidebarAnimation, toggleSidebar }) => {
    const handleLinkClick = () => {
        window.scrollTo(0, 0); // Scroll to top
        toggleSidebar(); // Close sidebar
    };

    return (
        <Wrapper
            sidebar={sidebar}
            sidebarAnimation={sidebarAnimation}
            toggleSidebar={toggleSidebar}>
            <div className="navulcontent">
                <div className="link">
                    <NavLink
                        to="/"
                        className={(navData) => (navData.isActive ? "active" : null)}
                        onClick={handleLinkClick}>
                        Home
                    </NavLink>
                </div>
                <div className="link">
                    <NavLink
                        to="/about"
                        className={(navData) => (navData.isActive ? "active" : null)}
                        onClick={handleLinkClick}>
                        About me
                    </NavLink>
                </div>
                <div className="link">
                    <NavLink
                        to="/services"
                        className={(navData) => (navData.isActive ? "active" : null)}
                        onClick={handleLinkClick}>
                        Services
                    </NavLink>
                </div>
                <div className="link">
                    <NavLink
                        to="/portofolio"
                        className={(navData) => (navData.isActive ? "active" : null)}
                        onClick={handleLinkClick}>
                        Portofolio
                    </NavLink>
                </div>
                <div className="link">
                    <NavLink
                        to="/contact"
                        className={(navData) => (navData.isActive ? "active" : null)}
                        onClick={handleLinkClick}>
                        Contact me
                    </NavLink>
                </div>
            </div>
        </Wrapper>
    );
};

export default Sidebar;
