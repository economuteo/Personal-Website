import styled from "styled-components";

const Wrapper = styled.div`
    border-radius: 20px;
    overflow: hidden;
    background-color: var(--special-color2);

    a {
        text-decoration: none;
    }

    img {
        object-fit: cover;
        filter: grayscale(100%);
    }

    .app-description {
        box-sizing: border-box;
        padding: 16px;
        display: flex;
        justify-content: space-between;
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
    @media only screen and (max-width: 600px) {
        img {
            width: 284px;
            height: 284px;
        }

        .app-description {
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

    @media only screen and (min-width: 1328px) {
        img {
            width: 100%;
            height: 415px;
        }

        .app-description {
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
