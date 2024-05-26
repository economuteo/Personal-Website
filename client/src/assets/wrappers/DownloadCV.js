import styled from "styled-components";

const Wrapper = styled.span`
    width: 130px;
    height: 33px;
    box-sizing: border-box;
    border: 2px solid var(--foundation-dark-hover);
    border-radius: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;

    a {
        font-family: "Lato Medium";
        text-decoration: none;
        color: var(--foundation-dark-hover);
    }

    :hover {
        scale: 1.05;
    }

    @media only screen and (min-width: 768px) {
        width: 132px;
        height: 49px;
    }

    @media only screen and (min-width: 1328px) {
        width: 211px;
        height: 48px;
        a {
            font-size: 1.25rem;
            font-family: "Lato Bold";
        }
    }
`;

export default Wrapper;
