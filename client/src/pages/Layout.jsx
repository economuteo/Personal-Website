import Wrapper from "../assets/wrappers/Outlet.js";
import { Navbar, Footer } from "../components";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Wrapper>
                <Outlet className="currentPage" />
            </Wrapper>
            <Footer />
        </div>
    );
};

export default Layout;
