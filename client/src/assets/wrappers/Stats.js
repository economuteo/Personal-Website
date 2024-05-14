import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.04);
    font-family: "Lato Bold";

    .column {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .column::after {
        content: "";
        display: block;
        height: 100%; /* Adjust as needed */
        border-right: 1.5px solid; /* Adjust color as needed */
        border-color: var(--foundation-dark-hover);
    }

    .column:last-child::after {
        display: none;
    }

    .special {
        font-family: "Lato Extra Bold";
        color: var(--primary-100);
        fill: 4%;
    }

    /* Responsiveness */
    @media only screen and (max-width: 600px) {
        width: 387px;
        height: 99px;
        padding: 16px;
        font-size: 16px;
        .special {
            font-size: 20px;
        }
        .column::after {
            margin-left: 16px;
        }
    }

    @media only screen and (min-width: 768px) {
        width: 535px;
        height: 125px;
        padding: 24px;
        font-size: 20px;
        .special {
            font-size: 24px;
        }
        .column::after {
            margin-left: 30px;
        }
    }

    @media only screen and (min-width: 1200px) {
    }
`;

export default Wrapper;
