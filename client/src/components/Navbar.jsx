import { useState, useEffect } from "react";
import Logo from "./Logo";
import Wrapper from "../assets/wrappers/Navbar";
import { AlignLeftIcon, HireMe, NavContent } from "../components";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            // You can adjust the value to your needs
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Wrapper className={`container ${scrolled ? "scrolled" : ""}`}>
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
