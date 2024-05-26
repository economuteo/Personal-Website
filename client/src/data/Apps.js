import { nanoid } from "nanoid";
// Images
import jobifyImage from "../assets/images/portofolio/jobify.png";
import ecommercePlatformImage from "../assets/images/portofolio/eCommercePlatform.png";

const apps = [
    {
        id: nanoid(),
        appName: "Jobify",
        category: "Desktop Apps",
        image: jobifyImage,
        link: "https://github.com/economuteo/Jobify-Job_Tracking_Platform-MERN",
    },
    {
        id: nanoid(),
        appName: "eCommerce Platform",
        category: "Desktop Apps",
        image: ecommercePlatformImage,
        link: "https://github.com/economuteo/Proshop-eCommerce_Platform-MERN",
    },
];

export default apps;
