import styled from "styled-components";

const Wrapper = styled.div`
    .da {
        width: 100px;
        height: 100px;
    }

    /* Responsiveness */
    /* Mobile */
    @media only screen and (max-width: 600px) {
        display: grid;
        gap: 20px;
    }

    /* Tablet */
    @media only screen and (min-width: 768px) {
    }

    /* Desktop */
    @media only screen and (min-width: 1260px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 17.5px;
    }
`;

export default Wrapper;
