import styled from "styled-components";

const Wrapper = styled.div`
    gap: 40px;
    .contact-info {
        display: flex;
        align-items: center;
        gap: 14px;
        img {
            width: 24px;
            height: 24px;
        }
        a {
            color: var(--foundation-dark-hover);
            text-decoration: none;
        }
    }

    /* Responsiveness */
    /* Mobile */
    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 14px;
    }

    /* Tablet */
    @media only screen and (min-width: 768px) {
    }

    /* Desktop */
    @media only screen and (min-width: 1260px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 40px;
    }
`;

export default Wrapper;
