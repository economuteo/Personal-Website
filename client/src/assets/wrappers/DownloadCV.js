import styled from "styled-components";

const Wrapper = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--foundation-dark-hover);
    border-radius: 10px;
    a {
        text-decoration: none;
        font-family: "Lato Bold";
        color: var(--foundation-dark-hover);
    }

    @media only screen and (max-width: 600px) {
        width: 130px;
        height: 33px;
        font-size: 14px;
    }

    @media only screen and (min-width: 768px) {
        width: 210px;
        height: 48px;
        font-size: 20px;
    }

    @media only screen and (min-width: 1200px) {
    }
`;

export default Wrapper;
