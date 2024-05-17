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
        color: white;
    }

    :hover {
        animation: Gradient 1.5s linear infinite;
        scale: 1.05;
    }

    /* Responsiveness */

    /* Mobile */
    @media only screen and (max-width: 600px) {
        width: 93px;
        height: 33px;
        font-size: 14px;
        a {
            font-family: "Lato Medium";
        }
    }

    /* Tablet */
    @media only screen and (min-width: 768px) {
    }

    /* Desktop */
    @media only screen and (min-width: 1260px) {
        width: 157px;
        height: 48px;
        font-size: 20px;
        a {
            font-family: "Lato Bold";
        }
    }
`;

export default Wrapper;
