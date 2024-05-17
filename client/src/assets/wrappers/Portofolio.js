import styled from "styled-components";

const Wrapper = styled.section`
    .special1 {
        margin-bottom: 40px;
        text-align: center;
        font-family: "Lato Regular";
        color: var(--primary-50);
        font-size: 36px;
    }

    .special-button {
        border-radius: 10px;
        font-family: "Lato Regular";
        color: var(--primary-50);
        background: var(--special-color2);
    }

    .active {
        background: var(--gradient-4);
    }

    /* Responsiveness */
    /* Mobile */
    @media only screen and (max-width: 600px) {
        .special-button {
            padding: 10px 20px;
        }
    }

    /* Tablet */
    @media only screen and (min-width: 768px) {
    }

    /* Desktop */
    @media only screen and (min-width: 1260px) {
        .special-button {
            padding: 14px 40px;
        }
    }
`;

export default Wrapper;
