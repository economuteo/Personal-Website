import styled from "styled-components";

const Wrapper = styled.span`
    display: flex;
    a {
        color: var(--foundation-dark-hover);
        font-family: "Lato Medium";
        font-size: 20px;
        text-decoration: none;
    }

    .active {
        color: var(--foundation-orange-normal);
    }

    @media only screen and (min-width: 768px) {
        gap:25px;
    }
    
    @media only screen and (min-width: 1280px) {
        gap:60px;
    }
`;

export default Wrapper;
