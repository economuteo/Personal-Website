import styled from "styled-components";

const Wrapper = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(3, auto);
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.04);

    .column {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .special {
        box-sizing: border-box;
        color: var(--foundation-orange-normal);
    }
    p {
        color: var(--foundation-normal-hover);
    }

    .column::after {
        content: "";
        display: block;
        height: 100%;
        border-right: 1.5px solid;
        border-color: var(--foundation-dark-hover);
    }
    .column:last-child::after {
        display: none;
    }

    /* Responsiveness */

    /* Mobile */
    @media only screen and (max-width: 600px) {
        width: 383px;
        height: 99px;
        padding: 16px;

        .special {
            font-size: 20px;
            font-family: "Lato Regular";
        }
        p {
            margin-top: 12px;
            font-size: 16px;
            font-family: "Lato Regular";
        }

        .column::after {
            margin-left: 16px;
        }
    }

    /*Tablets*/
    @media only screen and (min-width: 768px) {
    }

    /*Desktops*/
    @media only screen and (min-width: 1260px) {
        width: 537px;
        height: 125px;
        padding: 24px;

        .special {
            font-size: 24px;
            font-family: "Lato Extra Bold";
        }
        p {
            margin-top: 10px;
            font-size: 20px;
            font-family: "Lato Bold";
        }

        .column::after {
            margin-left: 30px;
        }
    }
`;

export default Wrapper;
