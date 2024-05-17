import styled from "styled-components";

const Wrapper = styled.span`
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--foundation-dark-hover);
    border-radius: 10px;

    a {
        text-decoration: none;
        color: var(--foundation-dark-hover);
    }

    :hover {
        scale: 1.05;
    }

    /* Responsiveness */

    @media only screen and (max-width: 600px) {
        width: 130px;
        height: 33px;
        font-size: 14px;
        a {
            font-family: "Lato Medium";
        }
    }

    @media only screen and (min-width: 768px) {
    }

    @media only screen and (min-width: 1260px) {
        width: 211px;
        height: 48px;
        a {
            font-size: 20px;
            font-family: "Lato Bold";
        }
    }
`;

export default Wrapper;
