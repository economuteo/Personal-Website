import styled from "styled-components";

const Wrapper = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: var(--gradient-2);
    background-size: 200% 200%;
    background-position: 0% 0;
    a {
        text-decoration: none;
        font-family: "Lato Bold";
        color: white;
    }

    :hover {
        animation: Gradient 1.5s linear infinite;
        scale: 1.05;
    }

    @media only screen and (max-width: 600px) {
        width: 85px;
        height: 33px;
        font-size: 14px;
    }

    @media only screen and (min-width: 768px) {
        width: 141px;
        height: 43px;
        font-size: 20px;
    }

    @media only screen and (min-width: 1200px) {
    }
`;

export default Wrapper;
