import styled from "styled-components";

const Wrapper = styled.div`
    /* Responsiveness */
    /* Mobile */
    @media only screen and (max-width: 600px) {
        margin-top: 40px;
        margin-bottom: 60px;
    }

    /* Tablet */
    @media only screen and (min-width: 768px) {
    }

    /* Desktop */
    @media only screen and (min-width: 1260px) {
        margin-top: 60px;
        margin-bottom: 130px;
    }
`;

export default Wrapper;
