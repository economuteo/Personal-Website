import styled from "styled-components";

const Wrapper = styled.div`
    border-radius: 20px;
    overflow: hidden;
    background-color: var(--special-color2);

    img {
        object-fit: cover;
        filter: grayscale(100%);
        transition: 0.5s ease;
        &:hover {
            filter: grayscale(0%);
        }
    }

    .app-description {
    }
    .app-name {
        font-family: "Lato Bold";
        color: var(--foundation-normal-active);
    }
    .app-categories {
        font-family: "Lato Bold";
        color: var(--foundation-dark-hover);
    }

    /* Responsiveness */
    /* Mobile */
    @media only screen and (max-width: 600px) {
        width: 284px;
        height: 338px;

        img {
            width: 284px;
            height: 284px;
        }

        .app-name {
            font-size: 16px;
        }
        .app-categories {
            font-size: 16px;
        }
    }

    /* Tablet */
    @media only screen and (min-width: 768px) {
    }

    /* Desktop */
    @media only screen and (min-width: 1260px) {
        width: 415px;
        height: 473px;

        img {
            width: 415px;
            height: 415px;
        }

        .app-name {
            font-size: 14px;
        }
        .app-categories {
            font-size: 14px;
        }
    }
`;

export default Wrapper;
