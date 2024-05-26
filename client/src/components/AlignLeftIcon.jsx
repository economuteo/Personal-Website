import Wrapper from "../assets/wrappers/AlignLeftIcon";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const AlignLeftIcon = () => {
    const [sidebar, setSidebar] = useState(false);
    const [sidebarAnimation, setSidebarAnimation] = useState(false);

    const toggleSidebar = () => {
        if (!sidebar) {
            document.body.style.overflow = "hidden";
            setSidebarAnimation(true);
            setSidebar(true);
        } else {
            document.body.style.overflow = "";
            setSidebarAnimation(false);
            setTimeout(() => {
                setSidebar(false);
            }, 300);
        }
    };

    return (
        <Wrapper onClick={toggleSidebar}>
            <span className={`hamburger ${sidebarAnimation ? "animate" : ""} `}> 
                <span className="the-line"></span>
                {sidebar ? (
                    <Sidebar
                        sidebar={sidebar}
                        sidebarAnimation={sidebarAnimation}
                        toggleSidebar={toggleSidebar}
                    />
                ) : null}
            </span>
        </Wrapper>
    );
};

export default AlignLeftIcon;
