import styled from "styled-components";

const Wrapper = styled.div`
    .swiper-pagination-bullet {
        background: var(--foundation-orange-normal) !important;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        object-fit: cover;
    }

    .swiper-pagination {
        top: 0px;
        position: relative;
    }
    /* Responsiveness */
    @media only screen and (max-width: 600px) {
        /* display: grid;
        gap: 20px; */
    }

    /* Tablet */
    @media only screen and (min-width: 768px) {
    }

    @media only screen and (min-width: 1328px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 17.5px;
    }
`;

export default Wrapper;
