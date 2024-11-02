import styled from "styled-components";

const Wrapper = styled.div`
    --gap-size: 16.5px;
    padding: 8px;
    width: 100%;
    max-width: 350px;
    box-sizing: border-box;
    border-radius: 20px;
    display: inline-flex;
    flex-direction: column;
    gap: var(--gap-size);
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.04);

    .column {
        box-sizing: border-box;
        padding: 10px;
        border-radius: 20px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 10px;
        align-items: start;
        font-family: "Lato Regular";
        background: var(--special-color);
        p {
            color: var(--foundation-normal-hover);
        }
    }

    .special {
        font-family: "Lato Bold";
        color: var(--foundation-orange-normal);
        font-size: 1.25rem;
    }

    p {
        font-size: 1rem;
        font-family: "Lato Regular";
        color: var(--foundation-normal-hover);
    }

    @media only screen and (min-width: 548px) {
        .special {
            font-size: clamp(1rem, 3vw, 1.25rem);
        }
        p {
            font-size: clamp(0.75rem, 2vw, 1rem);
        }
    }

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        .column {
            padding: 20px;
        }
        .special {
            font-size: 1.25rem;
        }
        p {
            font-size: 1rem;
        }
    }

    /* Tablets */

    @media only screen and (min-width: 1328px) {
        padding: 16px;
        max-width: 350px;
        height: 125px;

        .special {
            font-size: 1.25rem;
            font-family: "Lato Extra Bold";
        }
        .column {
            p {
                font-size: 1rem;
                font-family: "Lato Bold";
            }
        }
    }
`;
export default Wrapper;
