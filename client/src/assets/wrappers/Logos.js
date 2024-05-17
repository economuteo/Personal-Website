import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    img:hover {
        transform: translateY(-5px);
    }

    /* Responsiveness */
    /* Mobile */
    @media only screen and (max-width: 600px) {
        width: 220px;
        height: 56px;
        img {
            width: 40px;
            height: 40px;
        }
    }

    /* Desktops */
    @media only screen and (min-width: 1260px) {
        width: 220px;
        height: 56px;
        img {
            width: 40px;
            height: 40px;
        }
    }
`;

export default Wrapper;
