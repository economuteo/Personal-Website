import { useState } from "react";
import { Apps } from "../components";
import Wrappper from "../assets/wrappers/Portofolio";
import appsData from "../data/Apps";

const Portofolio = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredApps =
        activeCategory === "All"
            ? appsData
            : appsData.filter((app) => app.category === activeCategory);

    return (
        <Wrappper className="container">
            <p className="special1">Portofolio</p>
            <span className="buttons-container">
                <span
                    className={`special-button ${activeCategory === "All" ? "active" : ""}`}
                    onClick={() => setActiveCategory("All")}>
                    All
                </span>
                <span
                    className={`special-button ${
                        activeCategory === "Desktop Apps" ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory("Desktop Apps")}>
                    Desktop Apps
                </span>
            </span>
            <Apps apps={filteredApps} />
        </Wrappper>
    );
};

export default Portofolio;
