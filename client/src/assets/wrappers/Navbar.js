import styled from "styled-components";

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navul {
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
            color: var(--primary-100);
        }
    }

    /* Responsiveness */
    @media only screen and (max-width: 600px) {
        .navul {
            display: none;
        }
        .hireButton {
            width: 85px;
            height: 33px;
            font-size: 14px;
        }
    }

    @media only screen and (min-width: 768px) {
        .align-left-icon {
            display: none;
        }
        .hireButton {
            width: 141px;
            height: 43px;
            font-size: 16px;
        }
    }

    @media only screen and (min-width: 1200px) {
    }
`;

export default Wrapper;
