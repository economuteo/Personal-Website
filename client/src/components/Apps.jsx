import { App } from "../components";
import Wrapper from "../assets/wrappers/Apps";

import { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Apps = ({ apps }) => {
    const [isSwipper, setIsSwipper] = useState(window.innerWidth < 1328);

    useEffect(() => {
        const handleResize = () => {
            setIsSwipper(window.innerWidth < 1328);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Wrapper>
            {isSwipper ? (
                <Swiper
                    slidesPerView={1}
                    spaceBetween={18}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper">
                    {apps.map((app) => (
                        <SwiperSlide key={app.id}>
                            <App key={app.id} app={app} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                apps.map((app) => <App key={app.id} app={app} />)
            )}
        </Wrapper>
    );
};

export default Apps;
