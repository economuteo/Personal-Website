import Wrapper from "../assets/wrappers/Sidebar";
import { NavLink } from "react-router-dom";

const Sidebar = ({ sidebar, sidebarAnimation, toggleSidebar }) => {
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
                        onClick={toggleSidebar}>
                        Home
                    </NavLink>
                </div>
                <div className="link">
                    <NavLink
                        to="/about"
                        className={(navData) => (navData.isActive ? "active" : null)}
                        onClick={toggleSidebar}>
                        About me
                    </NavLink>
                </div>
                <div className="link">
                    <NavLink
                        to="/services"
                        className={(navData) => (navData.isActive ? "active" : null)}
                        onClick={toggleSidebar}>
                        Services
                    </NavLink>
                </div>
                <div className="link">
                    <NavLink
                        to="/portofolio"
                        className={(navData) => (navData.isActive ? "active" : null)}
                        onClick={toggleSidebar}>
                        Portofolio
                    </NavLink>
                </div>
                <div className="link">
                    <NavLink
                        to="/contact"
                        className={(navData) => (navData.isActive ? "active" : null)}
                        onClick={toggleSidebar}>
                        Contact me
                    </NavLink>
                </div>
            </div>
        </Wrapper>
    );
};

export default Sidebar;
