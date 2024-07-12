import styled from "styled-components";

const Wrapper = styled.section`
    .special1 {
        margin-bottom: 40px;
        text-align: center;
        font-family: "Lato Bold";
        color: var(--primary-50);
        font-size: 36px;
    }

    .buttons-container {
        margin-bottom: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 14px;
    }

    .special-button {
        padding: 10px 20px;
        border-radius: 10px;
        font-family: "Lato Regular";
        color: var(--primary-50);
        background: var(--special-color2);
    }

    .active {
        background: var(--gradient-4);
    }

    /* Responsiveness */

    /* Tablet */
    @media only screen and (min-width: 768px) {
    }

    @media only screen and (min-width: 1328px) {
        .buttons-container {
            margin-bottom: 70px;
            gap: 24px;
        }

        .special-button {
            padding: 14px 40px;
        }
    }
`;

export default Wrapper;
