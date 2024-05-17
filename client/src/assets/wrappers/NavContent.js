import styled from "styled-components";

const Wrapper = styled.span`
    width: 653px;
    height: 24px;
    display: flex;
    justify-content: space-between;

    a {
        color: var(--foundation-dark-hover);
        font-family: "Lato Medium";
        font-size: 20px;
        text-decoration: none;
    }

    .active {
        color: var(--foundation-orange-normal);
    }

    /* Responsiveness */
    @media (max-width: 600px) {
        display: none;
    }
`;

export default Wrapper;
