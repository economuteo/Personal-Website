import styled from "styled-components";

const Wrapper = styled.span`
    width: 85px;
    height: 33px;
    border-radius: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;
    background: var(--gradient-2);
    background-size: 200% 200%;
    background-position: 0% 0;

    a {
        font-family: "Lato Bold";
        text-decoration: none;
        color: white;
    }

    :hover {
        animation: Gradient 1.5s linear infinite;
        scale: 1.05;
    }

    @media only screen and (min-width: 768px) {
        width: 100px;
        height: 49px;
    }

    @media only screen and (min-width: 1328px) {
        width: 157px;
        height: 48px;
        font-size: 1.25rem;
    }
`;

export default Wrapper;
